"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WelderCard from "./components/WelderCard";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const welders = [
    {
      id: 1,
      name: "Jenny Kim",
      image: "/welderfind/images/welder1.png", // Add basePath
      hourlyRate: "$150/hr",
      city: "New York",
    },
    {
      id: 2,
      name: "Jack Smith",
      image: "/welderfind/images/welder2.png", // Add basePath
      hourlyRate: "$45/hr",
      city: "Los Angeles",
    },
    {
      id: 3,
      name: "Mike Johnson",
      image: "/welderfind/images/welder3.png", // Add basePath
      hourlyRate: "$55/hr",
      city: "Chicago",
    },
    {
      id: 4,
      name: "Mike Johnson",
      image: "/welderfind/images/welder4.png", // Add basePath
      hourlyRate: "$125/hr",
      city: "Chicago",
    },
  ];
  const filteredWelders = welders.filter(
    (welder) =>
      welder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      welder.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Find Welders in Your Area</h1>
        <p className="text-lg text-gray-600 mt-4">
          Browse through our list of professional welders near you.
        </p>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWelders.map((welder) => (
          <WelderCard key={welder.id} welder={welder} />
        ))}
      </main>
    </div>
  );
}