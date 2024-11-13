import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8001/api/", // Cambia esto por la URL base de tu API
  timeout: 10000, // Tiempo de espera para la solicitud
  headers: {
    "Content-Type": "application/json",
  },
});

// Puedes agregar interceptores si es necesario
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default instance;
