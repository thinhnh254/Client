import axios from "../axios";

export const apiLogin = (email, password) => {
  return axios.post("/user/login", { email, password });
};

export const register = (email, firstname, lastname, password) => {
  return axios.post("/user/register", { email, firstname, lastname, password });
};

export const current = () => {
  return axios.get("/user/current");
};

export const getAllUsers = (params) =>
  axios({
    url: "/user/",
    method: "get",
    params,
  });

export const updateUsers = (data, uid) =>
  axios({
    url: "/user/" + uid,
    method: "put",
    data,
  });

export const deleteUser = (uid) =>
  axios({
    url: "/user/" + uid,
    method: "delete",
  });
