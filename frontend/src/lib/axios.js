import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://fullstack-chat-app-m249.onrender.com" : "/api",
  withCredentials: true,
});
