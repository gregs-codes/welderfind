"use client";

import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import Header from "../components/Header";
import { useUser } from "../context/UserContext"; // Adjust the import path as necessary

export default function LoginOrRegister() {
  const [isLogin, setIsLogin] = useState(true); // Default to login form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const { setUser } = useUser(); // Assuming you have a UserContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("isLogin", isLogin);
      console.log("Form Data:", formData);
      const endpoint = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/register";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(`${isLogin ? "Login" : "Registration"} Successful:`, data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user)); // Store user data
        setUser(data.user); // Update context with user data
        window.location.href = "/";
      } else {
        console.error(`${isLogin ? "Login" : "Registration"} Error:`, data.error);
        alert(data.error || "An error occurred.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log("Google Login Successful:", credentialResponse);
    fetch("http://localhost:5000/api/oauth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ credential: credentialResponse.credential }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          setUser(data.user); // Update context with user data
          window.location.href = "/";
        } else {
          console.error("Google Login Error:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error during Google Login:", error);
      });
  };

  const handleGoogleLoginError = () => {
    console.error("Google Login Failed");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header
        title={isLogin ? "Log In to Your Account" : "Register as a Customer"}
        description={
          isLogin
            ? "Log in to access your account and manage your projects."
            : "Sign up to connect with professional welders in your area."
        }
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto border rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isLogin ? "Log In" : "Create an Account"}
          </h2>

          {/* Google Login */}
          <div className="mb-4">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginError}
            />
          </div>

          {/* Login/Register Form */}
          <form onSubmit={handleSubmit}>
            {isLogin ? (
              <>
                {/* Login Form */}
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
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                    className="mt-1 block w-full border rounded-lg p-2"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Registration Form */}
                <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
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
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="mt-1 block w-full border rounded-lg p-2"
                  />
                </div>

                <h3 className="text-lg font-semibold mb-2">Legal Name</h3>
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                    className="mt-1 block w-full border rounded-lg p-2"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
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
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                    className="mt-1 block w-full border rounded-lg p-2"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full"
            >
              {isLogin ? "Log In" : "Register"}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 underline"
            >
              {isLogin ? "Register" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}