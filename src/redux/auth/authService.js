import axios from "axios";

const SIGNUP_URL = " https://gallery-one.herokuapp.com/signUp";
const LOGIN_URL = " https://gallery-one.herokuapp.com/signIn";

//Register user
const register = async (userData) => {
  const response = await axios.post(SIGNUP_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Login user
const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Logout user
const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
