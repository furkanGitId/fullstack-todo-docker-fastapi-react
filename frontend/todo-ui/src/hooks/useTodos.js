import { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../api/todoApi";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadTodos = async () => {
    setLoading(true);
    const response = await getTodos();
    setTodos(response.data);
    setLoading(false);
  };

  const createTodo = async (title) => {
    await addTodo(title);
    loadTodos();
  };

  const updateTodoById = async (id, data) => {
    await updateTodo(id, data);
    loadTodos();
  };

  const deleteTodoById = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  const markComplete = async (id) => {
    await updateTodo(id, { completed: true });
    loadTodos();
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return {
    todos,
    loading,
    createTodo,
    updateTodo: updateTodoById,
    deleteTodo: deleteTodoById,
    markComplete,
  };
};
