import { create } from "zustand";
import axios from "axios";

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {email,password});

      if (response.status == 200) {
        const {accessToken,refreshToken,user} = response.data;

        // Store token and user in localStorage
        localStorage.setItem('accesstoken', accessToken);
        localStorage.setItem('accesstoken', refreshToken);
        localStorage.setItem('user', JSON.stringify(user));

        set({ isAuthenticated: true, user: response.data.user });
        return true;
      }
    } catch (error) {
      console.error("Login failed:", error);
    }

    return false;
  },
  logout: async () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  },
}));
