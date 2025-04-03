import Image from "next/image";

export default function WelderCard({ welder }) {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center">
      <Image
        src={welder.image}
        alt={welder.name}
        width={150}
        height={150}
        className="rounded-full"
      />
      <h2 className="text-xl font-semibold mt-4">{welder.name}</h2>
      <p className="text-gray-600">{welder.city}</p>
      <p className="text-green-600 font-bold">{welder.hourlyRate}</p>
    </div>
  );
}