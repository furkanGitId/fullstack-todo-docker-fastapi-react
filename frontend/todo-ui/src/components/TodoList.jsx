import TodoItem from "./TodoItem";

const TodoList = ({ todos, onComplete, onUpdate, onDelete }) => {
  if (!todos.length) {
    return <p className="text-muted">No todos found</p>;
  }

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
