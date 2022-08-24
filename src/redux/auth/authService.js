import axios from "axios";

const SIGNUP_URL = "http://api.galleryone.com.ng:5000/api/signUp";
const VERIFY_URL = "http://api.galleryone.com.ng:5000/api/confirmSignUp";
// const LOGIN_URL = "http://api.galleryone.com.ng:5000/api/signIn";
const LOGIN_URL = "https://gallery-one-app.herokuapp.com/api/signIn";
const PASSWORD_URL = "http://api.galleryone.com.ng:5000/api/forgotPassword";
const CONFIRM_PASSWORD_URL =
  "http://api.galleryone.com.ng:5000/api/confirmForgotPassword";

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

// import { makeUnAuthorizedPost } from "../../service";

// //Register user
// const register = async (userData) => {
//   const response = await makeUnAuthorizedPost("signUp", userData);
//   console.log(response);
//   return response;
// };

// //Login user
// const login = async (userData) => {
//   const response = await makeUnAuthorizedPost("signIn", userData);
//   const jResponse = JSON.stringify(response);
//   localStorage.setItem("token", jResponse);
//   console.log(response);
//   return response;
// };

// //Verify user
// const verify = async (userData) => {
//   const response = await makeUnAuthorizedPost("confirmSignUp", userData);
//   return response;
// };
// //Logout user
// const logout = async () => {
//   localStorage.removeItem("token");
// };

// //ResetPassword
// const resetPassword = async (userData) => {
//   const response = await makeUnAuthorizedPost("forgotPassword", userData);
//   return response;
// };

// //Confirm Password
// const confirmPassword = async (userData) => {
//   const response = await makeUnAuthorizedPost(
//     "confirmForgotPassword",
//     userData
//   );
//   return response;
// };

// const authService = {
//   register,
//   logout,
//   login,
//   verify,
//   resetPassword,
//   confirmPassword,
// };

// export default authService;
