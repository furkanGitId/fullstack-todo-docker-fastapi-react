import React, { useState } from "react";

const TodoItem = ({ todo, onUpdate, onDelete, onComplete }) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [completed, setCompleted] = useState(todo.completed);

  const handleSave = () => {
    onUpdate(todo.id, {
      title,
      completed,
    });
    setEditMode(false);
  };

  // EDIT MODE
  if (editMode) {
    return (
      <li className="list-group-item">
        <input
          className="form-control mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          <label className="form-check-label">Completed</label>
        </div>

        <button className="btn btn-sm btn-primary me-2" onClick={handleSave}>
          Save
        </button>
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => setEditMode(false)}
        >
          Cancel
        </button>
      </li>
    );
  }

  // VIEW MODE
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong>{todo.title}</strong>
        <div className="text-muted">
          Completed: {todo.completed ? "Yes" : "No"}
        </div>
      </div>

      <div>
        {!todo.completed && (
          <button
            className="btn btn-sm btn-success me-2"
            onClick={() => onComplete(todo.id)}
          >
            Done
          </button>
        )}

        <button
          className="btn btn-sm btn-warning me-2"
          onClick={() => setEditMode(true)}
        >
          Edit
        </button>

        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
