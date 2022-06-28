import React, { useState } from "react";
import ButtonFunction from "./ButtonFunction";
import "./todo-form.css";

function ToDoForm({ onClick }) {
  const [form, setForm] = useState("");

  return (
    <div className="todo-form">
      <h3>Write your daily task</h3>
      <p>i want to: {form}</p>
      <input
        type="text"
        onChange={(event) => {
          setForm(event.target.value);
        }}
      />
      <ButtonFunction text="Enter" onClick={() => onClick(form)} />
    </div>
  );
}

export default ToDoForm;
