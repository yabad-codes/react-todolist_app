import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import "../styles/TodoList.css";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text) return;
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      })
    );
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <TodoForm onSubmit={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={() => toggleComplete(todo.id)}
          deleteTask={() => deleteTask(todo.id)}
        />
      ))}
      <div className="left">
        to do's left : {todos.filter((todo) => !todo.complete).length}
      </div>
    </div>
  );
}
