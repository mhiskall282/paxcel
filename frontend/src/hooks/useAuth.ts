import { create } from "zustand";
import { useState } from "react";

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

interface jwtToken {
  token: string | null;
}
// const token = create<jwtToken>(() => {
//   localStorage.setItem("token", token);
// });
const apiEndpoint = "http://localhost:3000/api/";

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (email: string, password: string) => {
    try {
      const response = await fetch(`${apiEndpoint}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        set({ isAuthenticated: true, user: data.user });
        return true;
      }
    } catch (error) {
      console.error("Login failed:", error);
    }

    return false;
  },
  logout: async () => {
    try {
      const response = await fetch("https://your-api-endpoint.com/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        set({ isAuthenticated: false, user: null });
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },
}));
