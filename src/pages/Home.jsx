import HeroSlider from "../components/HeroSlider";
import VenueCard from "../components/VenueCard";

const halls = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: `Mazhar Hall ${i + 1}`,
  city: [
    "Hyderabad",
    "Bangalore",
    "Chennai",
    "Mumbai"
  ][i % 4],
  price: `₹${(80000 + i * 10000).toLocaleString()}`,
  image:[    
      "https://images.unsplash.com/photo-1511578314322-379afb476865",  
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a", 
      "https://images.unsplash.com/photo-1511578314322-379afb476865", 
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",    
  ][i % 4]
}));

export default function Home() {
  return (
    <div className="bg-[#FAF7F2] text-[#2B2B2B]">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-3xl font-bold text-amber-700">
            Mazhar Hall
          </h1>

          <div className="hidden md:flex gap-8">
            <a href="#">Home</a>
            <a href="#">Venues</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>

          <button className="bg-amber-600 text-white px-5 py-2 rounded-full">
            Login
          </button>

        </div>

      </nav>

      <HeroSlider />

      {/* Featured Venues */}

      <section className="max-w-7xl mx-auto py-20 px-6">

        <h2 className="text-5xl font-bold text-center mb-14">
          Featured Wedding Halls
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {halls.map((hall) => (
            <VenueCard
              key={hall.id}
              hall={hall}
            />
          ))}

        </div>

      </section>

      {/* Popular Cities */}

      <section className="py-20 bg-[#F5EFE6]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-12">
            Popular Cities
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Hyderabad",
              "Bangalore",
              "Chennai",
              "Mumbai",
            ].map((city) => (
              <div
                key={city}
                className="bg-white rounded-3xl p-10 text-center shadow-lg hover:-translate-y-2 transition"
              >
                <h3 className="text-2xl font-semibold">
                  {city}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-5xl font-bold text-amber-700">
              500+
            </h3>
            <p>Wedding Halls</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-amber-700">
              50+
            </h3>
            <p>Cities</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-amber-700">
              10K+
            </h3>
            <p>Bookings</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-amber-700">
              4.9
            </h3>
            <p>Rating</p>
          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-[#111] text-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-3xl font-bold text-amber-500">
            Mazhar Hall
          </h3>

          <p className="mt-4 text-gray-400">
            Luxury Wedding Hall Booking Platform
          </p>

          <p className="mt-6 text-gray-500">
            © 2026 Mazhar Hall. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}