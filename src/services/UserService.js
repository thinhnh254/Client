import axios from "axios";

export const loginUser = async (data) => {
  const res = await axios.post(`http://localhost:3515/user/login`, data);
  return res.data;
};

export const registerUser = async (data) => {
  const res = await axios.post(`http://localhost:3515/user/register`, data);
  return res.data;
};
