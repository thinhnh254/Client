import axios from "../axios";

//Product Category
export const getCategories = () =>
  axios({
    url: "/productcategory/",
    method: "get",
  });

//Product
export const getProducts = () =>
  axios({
    url: "/product/",
    method: "get",
  });


