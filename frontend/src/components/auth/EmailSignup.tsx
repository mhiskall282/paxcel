import React, { useState } from "react";
import { Mail, Lock, User, Contact, Contact2 } from "lucide-react";
import { replace, useNavigate } from "react-router-dom";
import {useAuth} from "./../../hooks/useAuth";
import axios from "axios"

export default function EmailSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address:"",
    phone:"",
  });
  const navigate = useNavigate();
  const [error,setError] = useState(null)
  const {isAuthenticated} = useAuth()

  if(isAuthenticated){
    navigate("/",{replace:true})
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", formData);

      if (response.status == 201) {
        console.log(response.data);

        localStorage.setItem("accessToken",response.data.accessToken);
        localStorage.setItem("refreshToken",response.data.refreshToken);
        localStorage.setItem("user",response.data.user);

        setError(null)
        navigate("/",{replace:true}); // move to login page
      }

    } catch (error:any) {
      setError(error.response.data.error)
      console.log("status", error.status);
      console.log("error", error.response.data.error);
    }
    // console.log("Email signup:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* general error handlin*/}
      { error && ( <p className="block text-sm font-medium text-red-700">{error}</p> )  }
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <div className="mt-1 relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="pl-10 w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <div className="mt-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="pl-10 w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1 relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="pl-10 w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <div className="mt-1 relative">
          <Contact2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="pl-10 w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Telephone
        </label>
        <div className="mt-1 relative">
          <Contact className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="pl-10 w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800"
      >
        Create Account
      </button>
    </form>
  );
}
