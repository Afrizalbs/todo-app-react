import ButtonFunction from "./ButtonFunction";
import TextField from "@mui/material/TextField";
import "./components.css";

function ToDoForm({ onClick, onChange, value }) {
  return (
    <div className="todo-form">
      <h3>Write your daily task</h3>
      <div className="wrapper">
        <TextField
          fullWidth
          size="small"
          type="text"
          variant="outlined"
          label="Create Task"
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
        <ButtonFunction text="Enter" onClick={() => onClick()} />
      </div>
    </div>
  );
}

export default ToDoForm;
