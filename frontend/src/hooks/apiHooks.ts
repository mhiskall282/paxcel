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
// AUTHENTICATION
export const LoginApi = (data: LoginData) => {
  const req = fetch(`${apiEndpoint}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return req;
};
// LOGIN

// REGISTER
export const RegisterApi = (data: RegisterData) => {
  const req = fetch(`${apiEndpoint}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return req;
};
