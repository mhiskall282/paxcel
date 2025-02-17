import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { LoginApi, RegisterApi } from "../../hooks/apiHooks";

export default function EmailSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error,setError] = useState(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const request = await RegisterApi(formData);
      const resposne = request.response.json()

      if (response.status == 200) {
        console.log(resp);
      } else {
        console.error("Registration failed:", resposne.message);
        setError(response.data.error)
      }

    } catch (error) {
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

      <button
        type="submit"
        className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800"
      >
        Create Account
      </button>
    </form>
  );
}
