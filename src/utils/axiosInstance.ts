import axios from "axios";
import environment from "./environment";

const instance = axios.create({
  baseURL: environment.API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
