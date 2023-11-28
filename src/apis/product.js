import axios from "../axios";

export const getProducts = (params) =>
  axios({
    url: "/product/",
    method: "get",
    params
  });

  export const getProduct = (pid) =>
    axios({
      url: "/product/" + pid,
      method: "get",
    });