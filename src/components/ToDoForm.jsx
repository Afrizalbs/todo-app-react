import ButtonFunction from "./ButtonFunction";
import "./todo-form.css";

function ToDoForm({ onClick, onChange, value }) {
  return (
    <div className="todo-form">
      <h3>Write your daily task</h3>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
      <ButtonFunction text="Enter" onClick={() => onClick()} />
    </div>
  );
}

export default ToDoForm;
