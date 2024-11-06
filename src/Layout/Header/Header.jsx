import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="container mx-auto p-4 bg-transparent">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-x-12">
          <div className="flex items-center">
            <h1 className="text-2xl text-white">
              <span className="font-semibold">Restau</span>rant
            </h1>
          </div>
          <div className="space-x-8 text-white">
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
        </div>
        <div>
          <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded">
            Book a Table
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
