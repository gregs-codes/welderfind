import Link from "next/link";

export default function Header({ title, description }) {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg text-gray-600 mt-4">{description}</p>
      <div className="mt-6">
        <Link href="/register">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Register as a Customer
          </button>
        </Link>
      </div>
    </header>
  );
}