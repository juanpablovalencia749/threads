import axios from "axios";
import { getEnviroments } from "../helpers/getEnviroment";

const { VITE_API_URL } = getEnviroments()

const threadApi = axios.create({
  baseURL: VITE_API_URL
})


export default threadApi