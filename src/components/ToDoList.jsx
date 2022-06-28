import React from "react";

function ToDoList({ activities }) {
  return (
    <div className="todo-list">
      <ul>
        {activities.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
