import React from "react";

const HeroSection = () => {
  return (
    <div className="relative pr-10">
      <div className="container mx-auto flex justify-between items-center py-20">
        {/* Text Section */}
        <div className="relative text-white px-8">
          <div className="text-4xl font-bold  mb-6">
            <div className="backdrop-grayscale-0 bg-red-600/60 inline-block pr-20 py-2">
              TASTE THE AUTHENTIC
              <br />
              SAUDI CUISINE
            </div>
          </div>
          <p className="max-w-md leading-relaxed mb-8">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition duration-200">
            EXPLORE MENU
          </button>
        </div>

        {/* Image Section */}
        <div className="relative">
          {/* Top Decorative Icon */}
          <img
            src="https://i.ibb.co/D8SHc8H/Vector.png"
            alt="hero-top-img"
            className="absolute top-[-20px] right-[-20px]"
          />
          {/* Main Dish Image */}
          <img
            src="https://i.ibb.co/K5DLHjG/image-1.png"
            alt="hero-img"
            className="relative rounded-lg shadow-lg w-"
          />

          {/* Bottom Offer Icon */}
          <div className="absolute bottom-[-5px] right-[-30px]">
            <img
              src="https://i.ibb.co/2Fmm5rc/Frame-1707478070.png"
              alt="today-offer"
              className="bg-yellow-500 p-2 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
