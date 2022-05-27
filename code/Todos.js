import React, { useState } from "react";
// import Form from "./Form";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const todoComplete = (i) =>
    setTodos(
      todos.map((todo, currentTodo) =>
        currentTodo === i
          ? {
              ...todo,
              complete: !todo.complete,
            }
          : todo
      )
    );

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div>
        <div
          onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
        />
        <div>
          {todos.map(({ text, complete }, i) => (
            <div
              key={text}
              onClick={() => todoComplete(i)}
              style={{
                textDecoration: complete ? "line-through" : "",
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
