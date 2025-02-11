import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

// Define the User type
interface User {
  id: number;
  name: string;
  email: string;
}

// Define the shape of the auth state
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

// Create UserContext with a default value
const UserContext = createContext<AuthState | undefined>(undefined);

// Define UserProvider component
const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const token = localStorage.getItem('token');
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!token);

  useEffect(() => {
    if (token) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [token]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const request = await LoginApi({ email, password });
      const response = request.data;

      if (request.status === 200) {
        const token = response.token;
        const user = response.user;

        // Store token and user in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        setIsAuthenticated(true);
        setUser(user);
        return true;
      }
    } catch (error) {
      console.error('Login failed:', error);
    }

    return false;
  };

  const logout = async () => {
    try {
      const response = await fetch('https://your-api-endpoint.com/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <UserContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
