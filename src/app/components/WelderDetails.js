// filepath: /Users/yegorshabanov/Documents/GitHub/betterweld/welderfind/src/components/WelderDetails.js
export default function WelderDetails({ welder }) {
    if (!welder) {
      return <div className="text-center text-red-500">Welder not found!</div>;
    }
  
    return (
      <div className="max-w-2xl mx-auto border rounded-lg shadow-md p-8">
        <img
          src={welder.image}
          alt={welder.name}
          className="rounded-2xl w-48 h-48 mx-auto"
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
      </div>
    );
  }