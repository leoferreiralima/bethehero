import axios from "axios";

const api = axios.create({
  baseURL:"http://localhost:3333"
});

api.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("token")}`;

export default api;