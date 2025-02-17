import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import axios from "axios";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ email: 'admin', password: 'admin' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  /// Redirect user to dashboard if logged in
  useEffect(() => {
    const tokenExist = localStorage.getItem('token');
    if (tokenExist) {
      navigate('/admin', { replace: true });
    }
  }, [navigate]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // try {
    //   const success = login(credentials.username, credentials.password);
    //   if (success) {
    //     navigate('/admin', { replace: true });
    //   } else {
    //     setError('Invalid credentials');
    //   }
    // } catch {
    //   setError('An error occurred during login');
    // } finally {
    //   setLoading(false);
    // }

    axios.post("http://localhost:3000/api/auth/login",credentials)
    .then(
      response=>{
        console.log(response?.data)
        const token = response.data.token;
        const user = response.data.user
        // save token 
        localStorage.setItem("token",token);
        
        // save user
        localStorage.setItem("user",user);

        // check permission/role ; must be admin
        if(user.role == "admin"){
          navigate('/admin', { replace: true });
        }

        setError("Permission denied");
        setLoading(false);

      }
    ).catch(
      error=>{
        console.log(error)
        console.log(error?.response?.data?.error);
        setError(error.response.data.error);
        setLoading(false);
      }
    )
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold text-blue-900">Admin Login</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  className="pl-10 w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="pl-10 w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}