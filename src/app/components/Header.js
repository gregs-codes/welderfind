"use client";

import { useUser } from "../context/UserContext";

export default function Header({ title, description }) {
  const { user, setUser } = useUser();
  console.log("user picture", user?.picture);
  console.log("user name", user?.name);
  console.log("user", user);
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <img
                src={user.picture}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
              <span>{user.name}</span>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  setUser(null); // Clear context
                  window.location.href = "/";
                }}
                className="text-white underline"
              >
                Logout
              </button>
            </div>
            
          ) : (
            <a href="/register" className="text-white underline">
              Login / Register
            </a>
          )}
        </div>
      </div>
    </header>
  );
}