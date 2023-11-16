import axios from "../axios";

//Product Category
export const getCategories = () =>
  axios({
    url: "/productcategory/",
    method: "get",
  });


