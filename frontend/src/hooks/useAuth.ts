import { create } from "zustand";
import { LoginApi, RegisterApi } from "./apiHooks";

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
      const request = await LoginApi({email,password});
      const response = request.data

      if (request.status == 200) {
        const token = response.token;
        const user = response.user;

        // Store token and user in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        set({ isAuthenticated: true, user: response.user });
        return true;
      }
    } catch (error) {
      console.error("Login failed:", error);
    }

    return false;
  },
  logout: async () => {
    try {

      if (response.ok) {
        set({ isAuthenticated: false, user: null });
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },
}));
