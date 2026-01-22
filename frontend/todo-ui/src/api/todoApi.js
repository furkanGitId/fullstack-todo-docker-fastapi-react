import axios from "axios";

const API_URL = "http://localhost:8000/todos";

export const getTodos = () => axios.get(`${API_URL}/get`);

export const addTodo = (title) => axios.post(`${API_URL}/add`, { title });

export const updateTodo = (id, data) =>
  axios.put(`${API_URL}/update/${id}`, data);

export const deleteTodo = (id) => axios.delete(`${API_URL}/delete/${id}`);
