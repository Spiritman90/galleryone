import { makeUnAuthorizedPost } from "../../service";

//Register user
const register = async (userData) => {
  const response = await makeUnAuthorizedPost("signUp", userData);

  return response;
};

//Login user
const login = async (userData) => {
  const response = await makeUnAuthorizedPost("signIn", userData);
  // console.log(JSON.stringify(response));
  const jResponse = JSON.stringify(response);
  localStorage.setItem("token", jResponse);
  return response;
};

//Verify user
const verify = async (userData) => {
  const response = await makeUnAuthorizedPost("confirmSignUp", userData);
  return response;
};
//Logout user
const logout = async () => {
  localStorage.removeItem("token");
};

//ResetPassword
const resetPassword = async (userData) => {
  const response = await makeUnAuthorizedPost("forgotPassword", userData);
  return response;
};

//Confirm Password
const confirmPassword = async (userData) => {
  const response = await makeUnAuthorizedPost(
    "confirmForgotPassword",
    userData
  );
  return response;
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
