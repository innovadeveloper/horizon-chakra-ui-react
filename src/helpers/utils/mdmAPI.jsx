import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9002/context/api",
});

// Esta función será "inyectada" desde el contexto
let getToken = async () => "";

// Puedes exportar esto para configurarlo desde App
export function setGetToken(fn) {
  getToken = fn;
}

api.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    // console.log("token interceptor" , token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
