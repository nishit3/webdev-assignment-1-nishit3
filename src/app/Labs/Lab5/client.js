import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER =
  process.env.NEXT_PUBLIC_HTTP_SERVER ||
  "https://kambaz-node-server-app-z7fi.onrender.com";
const ASSIGNMENT_API = `${HTTP_SERVER}/lab5/assignment`;
const TODOS_API = `${HTTP_SERVER}/lab5/todos`;

export const fetchWelcomeMessage = async () => {
  const response = await axiosWithCredentials.get(
    `${HTTP_SERVER}/lab5/welcome`
  );
  return response.data;
};

export const fetchAssignment = async () => {
  const response = await axiosWithCredentials.get(`${ASSIGNMENT_API}`);
  return response.data;
};

export const updateTitle = async (title) => {
  const response = await axiosWithCredentials.get(
    `${ASSIGNMENT_API}/title/${title}`
  );
  return response.data;
};

export const fetchTodos = async () => {
  const response = await axiosWithCredentials.get(TODOS_API);
  return response.data;
};

export const removeTodo = async (todo) => {
  const response = await axiosWithCredentials.get(
    `${TODOS_API}/${todo.id}/delete`
  );
  return response.data;
};

export const deleteTodo = async (todo) => {
  const response = await axiosWithCredentials.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};

export const createNewTodo = async () => {
  const response = await axiosWithCredentials.get(`${TODOS_API}/create`);
  return response.data;
};

export const postNewTodo = async (todo) => {
  const response = await axiosWithCredentials.post(`${TODOS_API}`, todo);
  return response.data;
};

export const updateTodo = async (todo) => {
  const response = await axiosWithCredentials.put(
    `${TODOS_API}/${todo.id}`,
    todo
  );
  return response.data;
};
