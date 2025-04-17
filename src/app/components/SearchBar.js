"use client";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
        placeholder="Search welders..."
        className="w-full border rounded-lg p-2"
      />
    </div>
  );
}