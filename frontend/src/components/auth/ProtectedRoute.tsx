import React,{useState,useEffect} from 'react';
import { Navigate } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';


const ProtectedRoute: React.FC<{ children: any }> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const checkTokenValidity = async () => {
    const token = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!token || !refreshToken) {
      return setIsAuthenticated(false);
    }

    const isTokenExpired = (token: string) => {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      return payload.exp < currentTime;
    };

    if (isTokenExpired(token)) {
      try {
        const response = await axios.post('http://localhost:3000/api/refresh', { token: refreshToken });
        const { accessToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        setIsAuthenticated(true);
      } catch (err) {
        console.error('Error refreshing token:', err);
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    checkTokenValidity();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <>
      {children}
    </>
  );
};

export default ProtectedRoute;
