// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { DatePicker, Space } from "antd";
const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

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
    <div className="px-0 sm:px-6 lg:px-0 2xl:px-0">
      <div className="container mx-auto px-4 sm:px-10 lg:px-36 py-10 sm:py-20 bg-booking-bg bg-cover bg-center">
        <div>
          <p className="flex items-center gap-x-4 mb-4">
            <span className="text-red-700 text-2xl">&#9632;</span>
            <span className="text-red-700 font-medium">Book Now</span>
          </p>
          <div className="text-white mb-6">
            <p className="text-2xl sm:text-3xl font-bold py-2">
              BOOK YOUR TABLE
            </p>
            <p className="w-full sm:w-[490px] text-base sm:text-lg">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>
          </div>
          <div id="form" className="pt-4 pb-10">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3 max-w-full sm:max-w-[665px] pb-4">
                <input
                  type="text"
                  placeholder="Your Name*"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent border-2 border-gray-500 p-2 text-white outline-none rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-2 border-gray-500 p-2 text-white outline-none rounded-md"
                />
                <Space direction="vertical" className="w-full bg-transparent">
                  <DatePicker
                    id="date"
                    required
                    placeholder="Reservation Date"
                    onChange={(date, dateString) => setDate(dateString)}
                    className="bg-transparent border-2 border-gray-500 p-2 text-white outline-none w-full"
                    style={{
                      color: "white",
                      outline: "none",
                    }}
                  />
                </Space>
                <input
                  type="number"
                  name="number"
                  id="number"
                  required
                  placeholder="Total People"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="bg-transparent border-2 border-gray-500 p-2 text-white outline-none rounded-md"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full sm:col-span-2 h-24 sm:h-36 bg-transparent border-2 border-gray-500 p-2 text-white outline-none resize-none rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-yellow-500 text-black font-semibold px-4 py-2 rounded"
              >
                BOOK NOW
              </button>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
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
              className="mt-4 bg-yellow-500 text-black font-semibold px-4 py-2 rounded w-full sm:w-auto"
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
