export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <div className="mt-6 text-center mb-6">
        <input
          type="text"
          placeholder="Search by name or city"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border text-gray-600 rounded-lg p-2 w-full sm:w-1/2"
        />
      </div>
    );
  }