import Image from 'next/image';
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-12">
        <div className="w-full md:w-2/3">
          <h1 className="font-lora text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hey, I am Jyotindra
          </h1>
          <p className="text-black font-medium text-lg mb-8">
            your friendly neighborhood <span className="font-bold text-rose-600">software engineer</span> who loves <span className="font-bold text-rose-600">backend engineering, distributed systems, and AI agents</span>.
          </p>
          
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              I&apos;m a software engineer focused on backend engineering, distributed systems, and AI agents. I&apos;ve spent the past two years working on production systems at Research Connect USA, <span className="font-semibold text-foreground">building event-driven architectures with Kafka, Kubernetes deployments</span>, PostgreSQL with Patroni, and building reliable infrastructure that doesn&apos;t break when load spikes.
            </p>
            <p>
              Built a task scheduler from scratch in Go to learn how DAG orchestration and goroutine concurrency patterns actually work in practice. <span className=" text-foreground">The goal is to understand how systems fail, not just how they&apos;re supposed to work.</span>
            </p>
            <p>
              On the AI side, I&apos;ve built a few systems: <span className="font-semibold text-foreground">a RAG pipeline combining hybrid search with HyDE and reranking</span>, a multi-agent finance research engine, and a schema analyst agent with self-correcting loops using LangGraph. <span className="font-semibold text-foreground">focusing on what actually matters for reliability, cost, and real constraints.</span>
            </p>
            <p>
              I document what I&apos;m learning: technical breakdowns, system design patterns, research on RAG internals and vector databases. <span className="font-semibold text-foreground">Not positioning myself as an expert; I&apos;m still figuring this out</span>. Just sharing the journey as it happens.
            </p>
            <p className="font-bold text-red-600 pt-2">
              Looking to work on backend and AI infrastructure problems, preferably at places where both matter.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a 
              href="https://github.com/JaguarsCodehub/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-card/60 backdrop-blur-sm border border-border/80 rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 text-sm font-medium hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.08)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              <Github size={16} /> GitHub
            </a>
            <a 
              href="https://x.com/jyotindrakt" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-card/60 backdrop-blur-sm border border-border/80 rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 text-sm font-medium hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.08)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg> 
            </a>
            <a 
              href="https://www.linkedin.com/in/jyotindra-tavanoji-41909317a/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-card/60 backdrop-blur-sm border border-border/80 rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 text-sm font-medium hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.08)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
        
        <div className="w-56 h-56 md:w-80 md:h-80 relative rounded-2xl overflow-hidden shrink-0 border-4 border-white shadow-lg glare-overlay">
          <Image
            src="https://avatars.githubusercontent.com/u/82316591?v=4"
            alt="Jyotindra Tavanoji"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
