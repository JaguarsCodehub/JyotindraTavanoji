# How I Cut Token Costs by 83% in a Multi-Agent AI System (Without Losing Output Quality) 👾

If you have built any multi-agent system using frameworks like LangGraph, CrewAI, or AutoGen, you have likely encountered the **Token Black Hole**. 

You start with a simple loop: Agent A finds web pages, Agent B extracts claims, and Agent C writes a report. But as you scale, a single research run begins chewing through **200,000+ tokens**, costing upwards of **$0.40 per query**. The agent becomes sluggish, starts suffering from "lost-in-the-middle" retrieval issues, and eventually hallucinations creep in as context windows overflow.

In our production-grade **Multi-Agent Research Engine**, we faced this exact wall. A comprehensive research run initially consumed **202,530 tokens**. By implementing five architectural context engineering techniques, we dropped that to **33,700 tokens**—an **83.3% cost reduction**—while actually *improving* the focus and depth of the final report.

Here is the exact breakdown of how we did it, along with the actual Python and LangGraph implementations from our codebase.

---

## The Root Cause: The "Monolithic Context" Anti-Pattern

Most multi-agent tutorials teach a simple pattern: pass the entire message history and state dictionary from node to node. 

```
[Orchestrator]
      │ (Passes ALL messages)
      ▼
  [Web Agent] ──(Runs Tavily searches, appends raw HTML/Markdown)──► [Doc Agent]
                                                                          │ (Appends PDF texts)
                                                                          ▼
                                                                     [Fact Checker]
                                                                          │ (Appends verifications)
                                                                          ▼
                                                                    [Writer Agent]
                                                             (Context: 200k+ tokens!)
```

This is a ticking time bomb. The Web Agent’s internal tool calls (scraping results, raw logs) and the Doc Agent's text chunks get appended to the orchestrator’s global state. By the time the **Writer Agent** is reached, it has to sift through massive amounts of noisy logs to write a clean 1,000-word report.

The solution is not better prompting. **The solution is Context Engineering.**

---

## 1. Sub-Agent Context Isolation (The Black Box Pattern)

Instead of sharing one giant message thread, every agent in our system is treated as an isolated **Black Box**. 

Each sub-agent (e.g., `WebAgent`, `DocAgent`) maintains a **private, local** `messages` list. The raw tool logs, intermediate thought steps, and raw search outputs remain entirely within the sub-agent’s memory. Once the agent completes its run, it serializes its output into a structured **Pydantic model** and returns only the final summary back to the Orchestrator.

Here is how we implement this inside our `WebAgent.run` method:

```python
# agents/web_agent.py
class WebAgent:
    @traceable(name="WebAgent.run")
    async def run(self, task: WebTask) -> WebResult:
        # 1. Initialize PRIVATE local context history
        messages = [
            {"role": "system", "content": WEB_AGENT_PROMPT},
            {"role": "user", "content": f"Please research these queries: {task.queries}"}
        ]
        
        num_embeddings_stored = 0
        total_prompt_tokens = 0
        total_completion_tokens = 0
        
        for step in range(5):
            response = await client.chat.completions.create(
                model=WORKER_MODEL,
                messages=messages,
                tools=TOOLS_SCHEMA,
                tool_choice="auto"
            )
            
            # Record local usage
            usage = response.usage
            global_tracker.add_cost("worker", usage.prompt_tokens, usage.completion_tokens)
            total_prompt_tokens += usage.prompt_tokens
            total_completion_tokens += usage.completion_tokens
            
            message = response.choices[0].message
            messages.append(message) # Local append
            
            if not message.tool_calls:
                # Compile private loop findings into a structured response
                res_dict = json.loads(clean_json_blocks(message.content))
                return WebResult(
                    sources=[Source(**s) for s in res_dict.get("sources", [])],
                    claims=res_dict.get("claims", []),
                    embeddings_stored=num_embeddings_stored,
                    prompt_tokens=total_prompt_tokens,
                    completion_tokens=total_completion_tokens
                )
            
            # Execute tools in parallel internally
            tool_results = await asyncio.gather(*[execute_tool(tc) for tc in message.tool_calls])
            messages.extend(tool_results)
```

### Why this saves tokens:
The Orchestrator’s global state (e.g. `ResearchState` in LangGraph) only receives the clean list of claims and URLs. The 15,000+ tokens of raw search scraping results and tool execution traces are garbage collected when `WebAgent.run` exits.

---

## 2. JIT (Just-in-Time) Document Loading via Pinecone RAG

Dumping a 100-page financial PDF into an LLM context is expensive and causes severe retrieval degradation. 

Instead of pre-loading entire documents, our `DocAgent` uses a **Just-in-Time (JIT)** loading paradigm. We parse and chunk documents using a background pipeline, embed them using OpenAI’s `text-embedding-3-small`, and store them in **Pinecone**. The agent is then equipped with tools to selectively search this vector database.

To ensure the agent receives the highest signal chunks without bloat, we implement **Cohere Reranking** (`rerank-english-v3.0`) on top of Pinecone's vector similarity scoring:

```python
# tools/pinecone_tools.py
import cohere
from config import COHERE_RERANK_API_KEY

cohere_client = cohere.AsyncClient(COHERE_RERANK_API_KEY) if COHERE_RERANK_API_KEY else None

async def rag_query_pinecone(query: str, top_k: int = 5) -> str:
    # 1. Fetch twice the target chunks from Pinecone initially
    fetch_k = top_k * 2 if cohere_client else top_k
    results = await store.search(query, top_k=fetch_k)
    
    if not results:
        return "No relevant context found in memory."
        
    docs_for_rerank = [{
        "text": m["metadata"].get("text", ""),
        "source": m["metadata"].get("source_url", "Unknown Source")
    } for m in results]
    
    # 2. Apply Cohere Reranking to extract top-K high-signal context
    if cohere_client:
        rerank_results = await cohere_client.rerank(
            query=query,
            documents=[d["text"] for d in docs_for_rerank],
            top_n=top_k,
            model="rerank-english-v3.0"
        )
        
        contexts = []
        for result in rerank_results.results:
            doc = docs_for_rerank[result.index]
            contexts.append(f"Source: {doc['source']} (Relevance: {result.relevance_score:.2f})\nText: {doc['text']}")
    else:
        # Fallback
        contexts = [f"Source: {d['source']}\nText: {d['text']}" for d in docs_for_rerank[:top_k]]
        
    return "\n\n---\n\n".join(contexts)
```

### Why this saves tokens:
Instead of sending **80,000 tokens** of raw PDF text, the `DocAgent` retrieves exactly 4 to 5 high-signal chunks matching its query, reducing the payload to **~4,000 tokens** without losing critical details.

---

## 3. The Execution Gate (Capping Search Loops)

Autonomous agents are notorious for falling into reasoning loops. An agent might decide to search the web, store details to Pinecone, analyze a claim, and then run *another* search to verify a detail from the first search, looping 10+ times.

To mitigate this, we built a simple, highly effective **Execution Gate** inside the worker run loop. We dynamically override the LLM's `tool_choice` parameter based on the current loop iteration:

```python
# Inside WebAgent.run's loop:
for step in range(5):
    # After step 2, don't let the agent call more tools — force a summary response
    # This prevents expensive, redundant search round-trips
    active_tool_choice = "auto" if step < 2 else "none"
    
    response = await client.chat.completions.create(
        model=WORKER_MODEL,
        messages=messages,
        tools=TOOLS_SCHEMA,
        tool_choice=active_tool_choice
    )
```

### Why this saves tokens:
By forcing `tool_choice="none"` after step 2, we terminate the planning agent's tool-calling cycle. The agent is forced to synthesize its existing findings and return them, eliminating waste from infinite search loops.

---

## 4. The Compaction Gate (The tiktoken Guard)

In a multi-agent system, the output of previous steps (Web Agent sources, Doc Agent analysis, Fact Checker verifications) must be passed to the final **Writer Agent** to produce the final report. 

If our research path encounters multiple disputes or a high volume of sources, this context can easily grow beyond 15,000 tokens. To handle this gracefully, we built a **Compaction Gate** in the Orchestrator's `writer_node` using `tiktoken`:

```python
# agents/orchestrator.py
from utils.token_tracker import get_token_count # tiktoken wrapper

@traceable(name="Orchestrator.writer_node")
async def writer_node(self, state: ResearchState) -> dict:
    context = {
        "web_sources": state.get("web_sources", []),
        "doc_analysis": state.get("doc_analysis", []),
        "verifications": state.get("verifications", [])
    }
    
    findings_text = json.dumps(context, default=str)
    findings_tokens = get_token_count(findings_text) # Measures actual GPT-4o tokens
    warnings = state.get("context_warnings", [])
    
    if findings_tokens > 15000:
        AgentLogger.orchestrator(f"⚡ COMPACTION TRIGGERED! Context is {findings_tokens:,} tokens.")
        warnings.append(f"Writer input was {findings_tokens} tokens before compaction.")
        
        # Call a fast compaction LLM to distill context
        compact_response = await compact_client.chat.completions.create(
            model=ORCHESTRATOR_MODEL,
            messages=[
                {"role": "system", "content": "You are an expert editor. Compress the given data into a dense structured summary (under 3000 words). Preserve all specific numbers, names, citations, judgments, conflict notes, and facts. Discard narrative fluff and pure repetition."},
                {"role": "user", "content": findings_text}
            ],
            max_tokens=3000
        )
        
        # Track compaction costs and substitute context
        context = {"compressed_findings": compact_response.choices[0].message.content}
        state["compaction_count"] = state.get("compaction_count", 0) + 1
    
    # Generate final output
    markdown_report = await self.writer_agent.run(state["topic"], context)
```

### Why this saves tokens:
The Writer Agent receives a dense, structured summary of findings (~3,000 tokens) instead of a massive, unorganized blob of JSON logs (15,000+ tokens). The model writes faster, adheres closer to formatting instructions, and never loses context.

---

## 5. Fan-out Fact-Checking (Parallel Isolation)

In our research engine, we verify claims extracted by the Web and Doc agents. If we feed all 8-10 claims to a single Fact Checker agent, the prompt context size explodes, and the agent loses focus. 

Instead, we use a **Fan-Out** architecture. The Orchestrator splits the list of claims and spawns **N parallel Fact Checker agents** (one per claim) using `asyncio.gather`:

```python
# agents/orchestrator.py
@traceable(name="Orchestrator.fact_check_node")
async def fact_check_node(self, state: ResearchState) -> dict:
    all_claims = list(set(state.get("web_claims", []) + state.get("doc_claims", [])))
    
    if not all_claims:
        return {"verifications": [], "disputed_count": 0}
        
    # Fan out: Spawn individual fact checkers in parallel
    tasks = [
        self.fact_agent.run(FactTask(
            claims=[claim], 
            query_context=state["topic"], 
            session_id=str(uuid.uuid4())
        ))
        for claim in all_claims
    ]
    
    results = await asyncio.gather(*tasks)
    
    # Flatten verifications
    verifications = []
    for fact_result in results:
        verifications.extend([v.model_dump() for v in fact_result.verifications])
        
    disputed = [v for v in verifications if v.get("verdict") == "DISPUTED"]
```

### Why this saves tokens:
Each Fact Checker agent receives a highly targeted context consisting of just **one claim** and the specific query context. This avoids context pollution and ensures the prompt stays extremely small (~1,000 tokens per sub-agent), which also enables OpenAI to utilize **Prompt Caching** (since the system prompt is static and identical).

---

## The Results: Before vs. After Metrics

By tracking token metrics via **LangSmith** and our internal cost trackers, we measured the impact of these changes. Here is the before and after token usage for a standard financial audit run (analyzing live news + quarterly earnings reports):

| Agent / Graph Node | Before Context Engineering (Tokens) | After Context Engineering (Tokens) | Optimization Applied |
| :--- | :---: | :---: | :--- |
| **Orchestrator Node** | 45,230 | **4,100** | Message/Log Isolation (Sees only summaries) |
| **Doc Agent (RAG)** | 38,100 | **8,200** | JIT Loading via Pinecone + Cohere Rerank |
| **Web Agent (Search)** | 22,400 | **6,400** | Private Context + Tool Choice Iteration Capping |
| **Fact Checker Node** | 41,000 | **5,800** | Parallel Fan-Out (Focused, smaller context) |
| **Writer Node** | 55,800 | **9,200** | Compaction Gate (Distilled input summary) |
| **TOTAL TOKENS** | **202,530** | **33,700** | **83.3% Cost Reduction** |

### Additional Wins:
* **Cache Hit Rate:** **74%** on system prompts. By keeping system prompts static and separating dynamic variables cleanly, the LLM provider caches the system instructions, reducing the cost of prompt input tokens by an additional **50%**.
* **Speed:** The total run time dropped from **160 seconds** to **42 seconds** due to parallel fan-out and bypassing slow website crawls.
* **Output Quality:** The Writer Agent no longer hallucinated citations because the input was condensed into a clean, dispute-resolved structured summary.

---

## Key Takeaways for AI Architects

1. **Context windows are not RAM.** Just because an LLM has a 128k or 1M context window doesn't mean you should fill it. Accuracy degrades long before the window overflows.
2. **Design isolated sub-graphs.** Let agents run their complex, tool-heavy reasoning loops in isolation. Ensure they return small, structured Pydantic models back to the parent orchestrator.
3. **Use the Compaction Gate pattern.** Always count your tokens before sending payloads to a summarizing or writing agent. If it's too big, trigger a fast compaction step.

*Have you optimized the context engineering in your multi-agent setups? Let's discuss in the comments!*
