import welders from "../../../data/welders";
import WelderDetails from "./WelderDetails";
import Header from "../../components/Header";

export default async function WelderDetailsPage({ params }) {
  const { id } = await params; // Await the params object

  // Find the welder by ID
  const welder = welders.find((w) => w.id === parseInt(id));

  if (!welder) {
    return <div className="text-center text-red-500">Welder not found!</div>;
  }

  return (

    <div className="min-h-screen mt-0 bg-white font-sans">
      {/* Header Component */}
      <Header
        title="Welding Supplies Store"
        description="Browse our collection of high-quality welding supplies."
      />

      <WelderDetails welder={welder} />
    </div>
  );
}

// Required for static export
export async function generateStaticParams() {
  // Generate an array of all possible `id` values
  return welders.map((welder) => ({
    id: welder.id.toString(),
  }));
}