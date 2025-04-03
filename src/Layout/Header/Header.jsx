import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position to change nav background color
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-red-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 lg:px-20 xl:px-36 py-4">
        {/* Logo */}
        <a href="/">
          <div className="flex items-center gap-x-2">
            <img src="https://i.ibb.co.com/TBTRsHG/Group.png" alt="logo" />
            <h1 className="text-2xl text-white">
              <span className="font-semibold">Restau</span>rant
            </h1>
          </div>
        </a>

        {/* Navigation Links (Visible on Tablets, Laptops, and Desktops) */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-white">
          <Link to="/" className="hover:text-[#EAB308] transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#EAB308] transition">
            About
          </Link>
          <Link to="/portfolio" className="hover:text-[#EAB308] transition">
            Portfolio
          </Link>
          <Link to="/clients" className="hover:text-[#EAB308] transition">
            Clients
          </Link>
          <Link to="/blog" className="hover:text-[#EAB308] transition">
            Blogs
          </Link>
          <Link to="/contact" className="hover:text-[#EAB308] transition">
            Contact
          </Link>
        </div>

        {/* CTA Button (Visible on Tablets, Laptops, and Desktops) */}
        <div className="hidden md:block">
          <button className="bg-yellow-500 text-black font-semibold px-5 py-2 rounded hover:bg-yellow-600 transition duration-200">
            Book a Table
          </button>
        </div>

        {/* Mobile Menu Button (Hidden on Tablets & Larger Screens) */}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-red-900 flex flex-col items-center justify-center space-y-6 transition-all duration-300">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-5 right-6 text-white text-3xl"
          >
            ×
          </button>
          <Link
            to="/"
            className="text-white text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-white text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/clients"
            className="text-white text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Clients
          </Link>
          <Link
            to="/blog"
            className="text-white text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <button className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-600 transition duration-200">
            Book a Table
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
