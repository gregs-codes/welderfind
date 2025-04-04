"use client";
import Link from "next/link";
import Image from "next/image";
import MessageForm from "./MessageForm";

export default function WelderDetails({ welder }) {
  if (!welder) {
    return <div className="text-center text-red-500">Welder not found!</div>;
  }

  return (
    <div className="max-w-2xl mx-auto border rounded-lg shadow-md p-8">
      {/* Go Back Button */}
      <div className="mb-8">
        <Link href="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Go Back
          </button>
        </Link>
      </div>

      {/* Welder Details */}
      <Image
        src={welder.image}
        alt={welder.name}
        width={192}
        height={192}
        className="rounded-2xl mx-auto"
      />
      <h1 className="text-3xl font-bold text-center mt-4">{welder.name}</h1>
      <p className="text-center text-gray-600">{welder.city}</p>
      <p className="text-center text-green-600 font-bold">{welder.hourlyRate}</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Skills:</h3>
        <p className="text-gray-600">{welder.skills.join(", ")}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Expertise:</h3>
        <p className="text-gray-600">{welder.expertise.join(", ")}</p>
      </div>

      {/* Message Form */}
      <MessageForm welderName={welder.name} />
    </div>
  );
}