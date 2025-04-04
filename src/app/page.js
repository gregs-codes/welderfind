"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import welders from "../data/welders";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWelders = welders.filter(
    (welder) =>
      welder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      welder.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
        <Header 
        title="Find Welders in Your Area"
        description="Browse through our list of professional welders near you."
      />

        <div className="text-center mb-12">
          <input
            type="text"
            placeholder="Search by name or city"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg p-2 w-full sm:w-1/2"
          />
        </div>


      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWelders.map((welder) => (
          <Link key={welder.id} href={`/welders/${welder.id}`}>
            <div className="border rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow">
              <Image
                src={welder.image}
                alt={welder.name}
                width={128} // Example width (adjust as needed)
                height={128} // Example height (adjust as needed)
                className="rounded-2xl"
              />
              <h2 className="text-xl font-semibold mt-4">{welder.name}</h2>
              <p className="text-gray-600">{welder.city}</p>
              <p className="text-green-600 font-bold">{welder.hourlyRate}</p>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}