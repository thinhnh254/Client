import axios from "../axios";

export const getProducts = (params) =>
  axios({
    url: "/product/",
    method: "get",
    params,
  });

export const getProduct = (pid) =>
  axios({
    url: "/product/" + pid,
    method: "get",
  });

export const createProduct = (data) =>
  axios({
    url: "/product/",
    method: "post",
    data,
  });

export const updateProduct = (data, pid) =>
  axios({
    url: "/product/" + pid,
    method: "put",
    data,
  });

export const deleteProduct = (pid) =>
  axios({
    url: "/product/" + pid,
    method: "delete",
  });
