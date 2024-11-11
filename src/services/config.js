import axios from "axios";

const api = axios.create({ baseURL: "https://pet-server-chi.vercel.app" });

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default api;