import axios from "../axios";

export const login = (email, password) => {
  return axios.post("/user/login", { email, password });
};

export const register = (email, firstname, lastname, password) => {
  return axios.post("/user/register", { email, firstname, lastname, password });
};
