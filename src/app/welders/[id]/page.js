"use client";

import welders from "../../../data/welders";
import WelderDetails from "../../../components/WelderDetails";

export default function WelderDetailsPage({ params }) {
  const { id } = params; // Extract the 'id' from the URL

  // Find the welder by ID
  const welder = welders.find((w) => w.id === parseInt(id));

  if (!welder) {
    return <div className="text-center text-red-500">Welder not found!</div>;
  }

  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
      <WelderDetails welder={welder} />
    </div>
  );
}