import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto py-4 px-6 sm:px-20 bg-transparent">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <img src="https://i.ibb.co.com/TBTRsHG/Group.png" alt="logo" />
          <h1 className="text-2xl text-white">
            <span className="font-semibold">Restau</span>rant
          </h1>
        </div>

        <div className="hidden md:flex space-x-8 text-white">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/portfolio" className="hover:underline">
            Portfolio
          </Link>
          <Link to="/clients" className="hover:underline">
            Clients
          </Link>
          <Link to="/blog" className="hover:underline">
            Blogs
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        <div className="hidden md:block">
          <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded">
            Book a Table
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-red-900  py-4 text-center">
          <Link to="/" className="block text-white py-2 hover:underline">
            Home
          </Link>
          <Link to="/about" className="block text-white py-2 hover:underline">
            About
          </Link>
          <Link
            to="/portfolio"
            className="block text-white py-2 hover:underline"
          >
            Portfolio
          </Link>
          <Link to="/clients" className="block text-white py-2 hover:underline">
            Clients
          </Link>
          <Link to="/blog" className="block text-white py-2 hover:underline">
            Blogs
          </Link>
          <Link to="/contact" className="block text-white py-2 hover:underline">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
