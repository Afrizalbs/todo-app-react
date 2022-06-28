import React, { useState } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import "./ToDo.css";
function ToDo() {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState("");

  const handleClick = () => {
    setTodos([...todos, form]);
    setForm("");
  };

  const handleForm = (todo) => {
    setForm(todo);
  };
  return (
    <div className="todo-container">
      <h1>ToDo App</h1>
      <ToDoForm onClick={handleClick} onChange={handleForm} value={form} />
      <ToDoList activities={todos} />
    </div>
  );
}

export default ToDo;
