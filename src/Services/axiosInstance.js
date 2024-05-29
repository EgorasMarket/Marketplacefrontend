import axios from "axios";
import { BASE_SERVER } from "./ApiRoutes";

const server = axios.create({
  baseURL: BASE_SERVER,
});

server.interceptors.request.use((config) => {
  const token = localStorage.getItem("x-token");

  config.params = config.params || {};

  config.headers = config.headers || {};

  config.headers["x-token"] = token;

  return config;
});

export default server;
