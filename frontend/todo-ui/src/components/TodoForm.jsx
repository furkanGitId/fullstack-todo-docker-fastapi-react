import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const submit = () => {
    if (!title.trim()) return;
    onAdd(title, isCompleted);
    setTitle("");
    setIsCompleted(false);
  };

  return (
      <div className="input-group">
        <span className="input-group-text">
          <input
            className="form-check-input mt-0"
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
        </span>

        <input
          type="text"
          className="form-control"
          placeholder="New todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className="btn btn-primary" onClick={submit}>
          Add
        </button>
      </div>
  );
};

export default TodoForm;
