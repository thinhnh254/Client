import axios from "../axios";

export const getCategories = () =>
  axios({
    url: "/productcategory/",
    method: "get",
  });
