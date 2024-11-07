import React, { useState } from "react";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !date || !number) {
      alert("Please fill out all required fields.");
      return;
    }

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);

    setName("");
    setEmail("");
    setDate("");
    setNumber("");
    setMessage("");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-0 2xl:px-0">
      <div className="container mx-auto px-20 py-20 bg-booking-bg bg-cover bg-center">
        <div>
          <p className="y-20 flex gap-x-4">
            <span className="text-red-700 size-2">&#9632;</span>
            <span className="text-red-700 font-medium">Book Now</span>
          </p>
          <div className="text-white">
            <p className="text-3xl font-bold py-2">BOOK YOUR TABLE</p>
            <p className="w-[490px]">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>
          </div>
          <div id="form" className="pt-10 pb-10">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-x-2 gap-y-3 max-w-[665px] pb-4">
                <input
                  type="text"
                  placeholder="Your Name*"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent border-2 border-gray-500 p-2 text-white outline-none"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-2 border-gray-500 p-2 text-white outline-none"
                />
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  placeholder="Reservation Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-transparent border-2 border-gray-500 p-2 text-white outline-none"
                />
                <input
                  type="number"
                  name="number"
                  id="number"
                  required
                  placeholder="Total People"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="bg-transparent border-2 border-gray-500 p-2 text-white outline-none"
                />
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-[665px] h-[140px] bg-transparent border-2 border-gray-500 pb-24 ps-2 text-white outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded"
              >
                BOOK NOW
              </button>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">Form Submitted</h2>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Reservation Date:</strong> {date}
            </p>
            <p>
              <strong>Total People:</strong> {number}
            </p>
            <p>
              <strong>Message:</strong> {message}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-yellow-500 text-black font-semibold px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
