import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-red-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Restaurant</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/menu" className="hover:underline">
            Menu
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded">
            Book a Table
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
