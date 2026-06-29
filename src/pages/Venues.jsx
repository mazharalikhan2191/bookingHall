import Navbar from "../components/Navbar";
import VenueCard from "../components/VenueCard";

function Venues() {

  const venues = [
    {
      name: "Royal Palace",
      location: "Hyderabad",
      price: 50000,
      image:
        "https://images.unsplash.com/photo-1519167758481-83f29c8b3f8d"
    },
    {
      name: "Grand Garden",
      location: "Bangalore",
      price: 70000,
      image:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="venue-container">
        {venues.map((venue, index) => (
          <VenueCard
            key={index}
            {...venue}
          />
        ))}
      </div>
    </>
  );
}

export default Venues;