"use client";

import Header from "../components/Header";
import Image from "next/image";
const basePath = process.env.NODE_ENV === "production" ? "" : "";
export default function Store() {
  const products = [
    {
      id: 1,
      name: "Metal Pipe",
      description: "Durable metal pipe for welding projects.",
      price: "$25.00",
      image: `${basePath}/images/metal-pipe.jpg`, // Replace with actual image path
      
    },
    {
      id: 2,
      name: "Metal Sheet",
      description: "High-quality metal sheet for construction and welding.",
      price: "$40.00",
      image: `${basePath}/images/metal-sheet.jpg`, // Replace with actual image path
    },
    {
      id: 3,
      name: "Welding Rods",
      description: "Premium welding rods for precision welding.",
      price: "$15.00",
      image: `${basePath}/images/welding-rods.jpg`, // Replace with actual image path
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Component */}
      <Header
        title="Welding Supplies Store"
        description="Browse our collection of high-quality welding supplies."
      />

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl text-gray-600 font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
                            <Image
                                className="w-full h-48 object-cover rounded-md mb-4"
                                src={product.image}
                                alt={product.name}
                                height={48} // Example height (adjust as needed)
                                width={48} // Example width (adjust as needed)

                            />
  
              <h3 className="text-xl text-gray-600 font-semibold mb-2">
                {product.name}
              </h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-green-600 font-bold mb-4">{product.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}