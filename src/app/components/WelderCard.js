import Image from "next/image";
import Link from "next/link";

export default function WelderCard({ welder }) {
  return (
    <div>
      <Link key={welder.id} href={`/welders/${welder.id}`}>
        <div className="border rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow">
          <Image
            src={welder.image} // Use the image path directly
            alt={welder.name}
            width={228} // Example width (adjust as needed)
            height={228} // Example height (adjust as needed)
            className="rounded-2xl"
          />
          <h2 className="text-xl text-gray-600 font-semibold mt-4">{welder.name}</h2>
          <p className="text-gray-600">{welder.city}</p>
          <p className="text-green-600 font-bold">{welder.hourlyRate}</p>
        </div>
      </Link>
    </div>
  );
}