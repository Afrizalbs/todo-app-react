import { Button } from "@mui/material";
import React, { useState } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import "./ToDo.css";
function ToDo() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Make Coffee", complete: false },
    { id: 2, task: "Make Breakfast", complete: true },
  ]);
  const [form, setForm] = useState("");

  const handleClick = () => {
    const newTodo = { id: todos.length + 1, task: form, complete: false };
    setTodos([...todos, newTodo]);
    setForm("");
  };

  const handleForm = (todo) => {
    setForm(todo);
  };

  const handleCheckbox = (id) => {
    const newTodos = [...todos];
    const findIndex = newTodos.findIndex((todo) => todo.id === id);

    newTodos[findIndex].complete = !newTodos[findIndex].complete;
    setTodos(newTodos);
  };

  const handleDelete = () => {
    const newTodos = todos.filter((data) => !data.complete);
    setTodos(newTodos);
  };
  return (
    <div className="todo-container">
      <h1>ToDo App</h1>
      <ToDoForm onClick={handleClick} onChange={handleForm} value={form} />
      <ToDoList activities={todos} handleCheckbox={handleCheckbox} />
      <Button variant="outlined" color="error" onClick={handleDelete}>
        Delete Complete ToDo
      </Button>
    </div>
  );
}

export default ToDo;
