import axios from "axios";
import { API_URL, TOKEN } from "./constants";

const api = axios.create({
  baseURL: `${API_URL}`,
});

api.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: `Bearer ${TOKEN}`,
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;
