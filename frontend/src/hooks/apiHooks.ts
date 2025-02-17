import axios from "axios"

// use backend API
const apiEndpoint = "http://localhost:3000/api";

// Define an interface for the login data
interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface headers {
  type: string;
  auth: string;
};

// AUTHENTICATION
// LOGIN
export const LoginApi = (data: LoginData) => {
  const req = axios.post(`${apiEndpoint}/auth/login`, data);
  return req;
};

// REGISTER
export const RegisterApi = (data: RegisterData) => {
  const req = axios.post(`${apiEndpoint}/auth/register`, data);
  return req;
};


