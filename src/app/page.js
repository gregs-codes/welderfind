"use client";

import { useState } from "react";
import Header from "./components/Header";
import WelderCard from "./components/WelderCard";
import SearchBar from "./components/SearchBar";
import welders from "../data/welders";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWelders = welders.filter(
    (welder) =>
      welder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      welder.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-0 font-sans">
      <Header
        title="Find Welders in Your Area"
        description="Browse through our list of professional welders near you."
      />

      {/* Pass searchTerm and setSearchTerm to SearchBar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWelders.map((welder) => (
          <WelderCard key={welder.id} welder={welder} />
        ))}
      </main>
    </div>
  );
}