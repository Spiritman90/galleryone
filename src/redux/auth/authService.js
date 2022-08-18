import axios from "axios";

const SIGNUP_URL = "https://gallery-one-app.herokuapp.com/api/signUp";
const VERIFY_URL = "https://gallery-one-app.herokuapp.com/api/confirmSignUp";
const LOGIN_URL = "https://gallery-one-app.herokuapp.com/api/signIn";
const PASSWORD_URL = "https://gallery-one-app.herokuapp.com/api/forgotPassword";
const CONFIRM_PASSWORD_URL =
  "https://gallery-one-app.herokuapp.com/api/confirmForgotPassword";

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

//Verify user
const verify = async (userData) => {
  const response = await axios.post(VERIFY_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};
//Logout user
const logout = async () => {
  localStorage.removeItem("user");
};

//ResetPassword
const resetPassword = async (userData) => {
  const response = await axios.post(PASSWORD_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Confirm Password
const confirmPassword = async (userData) => {
  const response = await axios.post(CONFIRM_PASSWORD_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
  logout,
  login,
  verify,
  resetPassword,
  confirmPassword,
};

export default authService;
