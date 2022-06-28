import React, { useState } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import "./ToDo.css";
function ToDo() {
  const [todos, setTodos] = useState([]);

  const handleClick = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <div className="todo-container">
      <h1>ToDo App</h1>
      <ToDoForm onClick={handleClick} />
      <ToDoList activities={todos} />
    </div>
  );
}

export default ToDo;
