import { useEffect, useState } from "react";

const slides = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1519167758481-83f29c8b3f8d",
//     title: "Find Your Dream Wedding Hall",
//     subtitle: "Luxury Venues For Weddings & Celebrations",
//   },
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Premium Banquet Halls",
    subtitle: "Discover Elegant Spaces For Every Event",
  },
  {
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a",
    title: "Book The Perfect Venue",
    subtitle: "Wedding, Reception, Birthday & Corporate Events",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center duration-1000 transition-all"
        style={{
          backgroundImage: `url(${slides[current].image})`,
        }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-6 text-white">

          <h1 className="text-5xl md:text-7xl font-bold max-w-4xl">
            {slides[current].title}
          </h1>

          <p className="mt-6 text-xl max-w-2xl">
            {slides[current].subtitle}
          </p>

          <div className="mt-10 bg-white rounded-3xl p-4 shadow-2xl">

            <div className="grid md:grid-cols-4 gap-4">

              <input
                type="text"
                placeholder="Search City"
                className="border p-4 rounded-xl text-black"
              />

              <select className="border p-4 rounded-xl text-black">
                <option>Wedding</option>
                <option>Reception</option>
                <option>Birthday</option>
              </select>

              <select className="border p-4 rounded-xl text-black">
                <option>100 Guests</option>
                <option>300 Guests</option>
                <option>500 Guests</option>
              </select>

              <button className="bg-amber-600 text-white rounded-xl">
                Search
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}