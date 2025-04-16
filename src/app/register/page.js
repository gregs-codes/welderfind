"use client";

import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import Header from "../components/Header";

export default function RegisterOrLogin() {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const response = await fetch("http://localhost:5000/api/oauth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credential: credentialResponse.credential }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("Google Login Successful:", data);
        localStorage.setItem("token", data.token);
        window.location.href = "/dashboard";
      } else {
        console.error("Google Login Error:", data.error);
        alert(data.error || "An error occurred during login.");
      }
    } catch (error) {
      console.error("Error during Google Login:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  const handleGoogleLoginError = () => {
    console.error("Google Login Failed");
    alert("Google Login Failed. Please try again.");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header
        title={isRegister ? "Register as a Customer" : "Login to Your Account"}
        description={
          isRegister
            ? "Sign up to connect with professional welders in your area."
            : "Log in to access your account and manage your projects."
        }
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto border rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isRegister ? "Create an Account" : "Log In"}
          </h2>

          {/* Google Login Button */}
          <div className="mb-6">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={handleGoogleLoginError}
            />
          </div>

          <p className="text-center text-gray-600 mb-4">or</p>

          {/* Registration/Login Form */}
          <form>
            {isRegister && (
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="mt-1 block w-full border rounded-lg p-2"
                />
              </div>
            )}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="mt-1 block w-full border rounded-lg p-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                className="mt-1 block w-full border rounded-lg p-2"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full"
            >
              {isRegister ? "Register" : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}