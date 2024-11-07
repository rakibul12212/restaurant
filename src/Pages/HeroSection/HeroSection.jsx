import React from "react";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center py-10 lg:py-20 relative">
        <div className="text-white z-10 mb-8 lg:mb-0 lg:absolute lg:left-0">
          <div className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-4 lg:mb-6">
            <div className="backdrop-grayscale-0 bg-red-500/30 inline-block px-2 sm:px-4 lg:px-6 py-2 z-10">
              <p className="py-4">TASTE THE AUTHENTIC</p>
              <p>SAUDI CUISINE</p>
            </div>
          </div>
          <p className="max-w-md text-sm sm:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <button className="bg-yellow-500 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-yellow-600 transition duration-200">
            EXPLORE MENU
          </button>
        </div>

        <div className="relative lg:left-[470px] 2xl:left-[500px]  mt-8 lg:mt-0">
          <div className="relative">
            <img
              src="https://i.ibb.co/D8SHc8H/Vector.png"
              alt="hero-top-img"
              className="absolute top-[-20px] sm:top-[-35px] right-[-10px] sm:right-[-25px] z-0"
            />

            <img
              src="https://i.ibb.co/K5DLHjG/image-1.png"
              alt="hero-img"
              className="relative rounded-lg shadow-lg z-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full"
            />

            <div className="absolute bottom-[-5px] right-[-15px] sm:bottom-[-4px] sm:right-[-30px]">
              <img
                src="https://i.ibb.co/2Fmm5rc/Frame-1707478070.png"
                alt="today-offer"
                className="bg-yellow-500 p-1 sm:p-2 rounded-full w-12 sm:w-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
