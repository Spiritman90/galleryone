import axios from "axios";

const API_URL = "https://gallery-one-app.herokuapp.com/api/";
const REQUEST_TIMEOUT = 6000;

export const fetchUserToken = () => JSON.parse(localStorage.getItem("token"));
const clearData = () => localStorage.clear();

/** general headers **/
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

/** authorization header for logged in user **/
const setAuthorization = () => ({
  Authorization: `Bearer ${fetchUserToken()}`,
});

/** axios instance **/
const instance = axios.create({
  baseURL: API_URL,
  headers,
});

/** timeout configuration for axios instance **/
instance.defaults.timeout = REQUEST_TIMEOUT;

/** axios interceptor to trigger a logout on unauthorized error response code **/
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (
      error.response &&
      (error.response.status === 307 ||
        error.response.status === 403 ||
        error.response.status === 401)
    ) {
      clearData();
      window.location.reload();
      return Promise.reject({
        status: 401,
        message: "Login session expired, please login again",
      });
    }

    return Promise.reject(
      error ? (error.response ? error.response.data : error.response) : null
    );
  }
);

export const makeUnAuthorizedPost = async (url, data = {}) => {
  const response = await instance.request({
    method: "POST",
    url: url,
    data,
    headers: {
      ...headers,
    },
  });
  return response;
};
export const makeGetRequest = async (url) => {
  const response = await instance.request({
    method: "GET",
    url: url,
    headers: {
      ...headers,
      ...setAuthorization(),
    },
  });
  return response;
};
export const makePostRequest = async (url, data = {}) => {
  const response = await instance.request({
    method: "POST",
    url: url,
    data,
    headers: {
      ...headers,
      ...setAuthorization(),
    },
  });
  return response;
};
export const makePutRequest = async (url, data = {}) => {
  const response = await instance.request({
    method: "PUT",
    url: url,
    data,
    headers: {
      ...headers,
      ...setAuthorization(),
    },
  });
  return response;
};
