export default function VenueCard({ hall }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">

      <div className="relative">

        <img
          src={hall.image}
          alt={hall.name}
          className="h-64 w-full object-cover"
        />

        <span className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full">
          Featured
        </span>

      </div>

      <div className="p-5">

        <h3 className="text-2xl font-bold">
          {hall.name}
        </h3>

        <p className="text-gray-500">
          {hall.city}
        </p>

        <p className="text-amber-700 font-bold text-xl mt-2">
          {hall.price}
        </p>

        <button className="mt-5 w-full bg-amber-600 text-white py-3 rounded-xl">
          View Details
        </button>

      </div>

    </div>
  );
}