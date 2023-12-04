import axios from "../axios";

export const apiLogin = (email, password) => {
  return axios.post("/user/login", { email, password });
};

export const register = (email, firstname, lastname, password, mobile) => {
  return axios.post("/user/register", {
    email,
    firstname,
    lastname,
    password,
    mobile,
  });
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

export const updateCurrent = (data) =>
  axios({
    url: "/user/update",
    method: "put",
    data,
  });

export const updateCart = (data) =>
  axios({
    url: "/user/cart",
    method: "put",
    data,
  });

export const removeCart = (pid) =>
  axios({
    url: "/user/remove-cart/" + pid,
    method: "delete",
  });
