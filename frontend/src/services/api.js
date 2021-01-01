import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://3333-f177e507-4d03-458d-8465-6c9b8cd3090b.ws-eu03.gitpod.io/"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
