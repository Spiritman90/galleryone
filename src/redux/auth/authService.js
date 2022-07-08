import axios from "axios";

const SIGNUP_URL = "https://gallery-one-app.herokuapp.com/api/signUp";
const VERIFY_URL = "https://gallery-one-app.herokuapp.com/api/confirmSignUp";
const LOGIN_URL = "https://gallery-one-app.herokuapp.com/api/signIn";

//Register user
const register = async (userData) => {
  const response = await axios.post(SIGNUP_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  console.log(response);
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

//Verify user
const verify = async (userData) => {
  const response = await axios.post(VERIFY_URL, userData);
  return response.data;
};

const authService = {
  register,
  logout,
  login,
  verify,
};

export default authService;
