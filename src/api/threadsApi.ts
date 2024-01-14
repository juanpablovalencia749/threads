import axios from "axios";
import { getEnviroments } from "../helpers/getEnviroment";

const { VITE_API_URL } = getEnviroments()

const threadApi = axios.create({
  baseURL: VITE_API_URL
})
//config interceptor
// threadApi.interceptors.request.use( (config: any ) => {

//   config.headers = {
//      ...config.headers,
//     //  'x-token':localStorage.getItem('token')
//   }

//   return config
// } )


export default threadApi