"use client";

import { useState } from "react";
import Header from "../components/Header";

export default function RegisterOrLogin() {
  const [isRegister, setIsRegister] = useState(true); // Toggle between Register and Login
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      console.log("User registered:", formData);
    } else {
      console.log("User logged in:", formData);
    }
    setSuccess(true);
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Component */}
      <Header
        title={isRegister ? "Register as a Customer" : "Login to Your Account"}
        description={
          isRegister
            ? "Sign up to connect with professional welders in your area."
            : "Log in to access your account and manage your projects."
        }
      />

      {/* Form Container */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto border rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isRegister ? "Create an Account" : "Log In"}
          </h2>
          {success && (
            <p className="text-green-600 mb-4 text-center">
              {isRegister
                ? "Registration successful! You can now log in."
                : "Login successful!"}
            </p>
          )}
          <form onSubmit={handleSubmit}>
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
                  onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              {isRegister
                ? "Already have an account?"
                : "Don't have an account yet?"}{" "}
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="text-blue-500 hover:underline"
              >
                {isRegister ? "Log In" : "Register"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}