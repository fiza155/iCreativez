import axios from "axios";

const API_URL = "";

export const loginAPI = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

export const registerAPI = (credentials) => {
  return axios.post(`${API_URL}/register`, credentials);
};

export const loginUser = async (credentials) => {
  return loginAPI(credentials);
};
export const registerUser = async (credentials) => {
  return registerAPI(credentials);
};
