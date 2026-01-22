import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useTodos } from "../hooks/useTodos";

const TodoPage = () => {
  const { todos, loading, createTodo, markComplete, updateTodo, deleteTodo } =
    useTodos();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Todo List</h2>

          <TodoForm onAdd={createTodo} />

          <div className="mt-4">
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : (
              <TodoList
                todos={todos}
                onComplete={markComplete}
                onUpdate={updateTodo}
                onDelete={deleteTodo}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
