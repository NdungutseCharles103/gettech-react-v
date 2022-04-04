import axios  from "axios";

export const api = axios.create({
  baseURL: `https://hitech1.herokuapp.com`,
});