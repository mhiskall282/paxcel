import axios from 'axios';

const API_ENDPOINT = "http://localhost:3000/api/";

interface LoginData {
    email: string | null;
    password: string | null;
}

interface RegisterData {
    name: string;
    email: string;
    address: string;
    phone: string;
    password: string;
}

interface CustomHeaders {
    [key: string]: string;
}

export const registerApi = (data: RegisterData) => axios.post(`${API_ENDPOINT}auth/register/`, data);

export const login = (data: LoginData) => axios.post(`${API_ENDPOINT}auth/login/`, data);

export const trackParcel = (data: any, headers: CustomHeaders) => axios.get(`${API_ENDPOINT}tracking/${data}`, { headers });
