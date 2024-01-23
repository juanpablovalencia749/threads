// import axios, { AxiosRequestHeaders } from "axios";
import axios, { AxiosRequestHeaders } from "axios";
import { getEnviroments } from "../helpers/getEnviroment";

const { VITE_API_URL } = getEnviroments()

const threadApi = axios.create({
  baseURL: VITE_API_URL,
})

// config interceptor
threadApi.interceptors.request.use((config) => {
  config.headers = Object.assign(
    {},
    config.headers, {
    'x-token': localStorage.getItem('token')
  }) as AxiosRequestHeaders; 
  return config;
});

export default threadApi;
