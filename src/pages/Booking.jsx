import Navbar from "../components/Navbar";

function Booking() {
  return (
    <>
      <Navbar />

      <div className="booking-form">

        <h2>Book Your Event</h2>

        <form>

          <input
            type="text"
            placeholder="Name"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="date"
          />

          <select>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Corporate Event</option>
          </select>

          <button>
            Submit Booking
          </button>

        </form>
      </div>
    </>
  );
}

export default Booking;