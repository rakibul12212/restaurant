import React from "react";
import { LuPhoneCall } from "react-icons/lu";

const ServicesSection = () => {
  return (
    <div className="bg-white container mx-auto px-4 sm:px-6 lg:px-20 2xl:px-0 py-20">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row gap-x-10">
        <div className="relative mb-8 lg:mb-0">
          <img
            src="https://i.ibb.co.com/pPbpnK0/content.png"
            alt=""
            className="absolute m-5 p-4 w-[150px] bg-white rounded-lg"
          />
          <img
            src="https://i.ibb.co.com/8gNY4TF/Frame-1707478063.png"
            alt="service-img"
            className="w-full"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <ul className="flex flex-wrap justify-start gap-x-6 border-b-2 border-red-700">
            <li className="hover:bg-red-700 hover:text-white p-2">About</li>
            <li className="hover:bg-red-700 hover:text-white p-2">Experience</li>
            <li className="hover:bg-red-700 hover:text-white p-2">Contact</li>
          </ul>
          <div className="pt-6 font-bold text-3xl">
            <p>EXCEPTIONAL CULINARY</p>
            <p>EXPERIENCE AND DELICIOUS FOOD</p>
          </div>
          <p className="py-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            magnam non nesciunt id dicta ab? Quibusdam doloremque sequi aut
            sunt! Dolor quo fugiat eos, illo quam, nesciunt ipsam in nulla
            laboriosam tempora provident voluptatibus eaque debitis doloribus
            est ratione magnam aliquid? Exercitationem, explicabo molestias.
          </p>
          <div className="flex flex-wrap items-center gap-x-8">
            <button className="bg-yellow-500 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-yellow-600 transition duration-200">
              ABOUT MORE
            </button>
            <div className="flex items-center gap-x-2">
              <LuPhoneCall className="text-red-700 size-5" />
              <p className="font-semibold">+88 3426 739 485</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-20 space-y-10 lg:space-y-0">
        {/* Fast Delivery */}
        <div className="flex items-center gap-x-4">
          <div className="p-4 bg-white rounded-full shadow-lg">
            <img
              src="https://i.ibb.co.com/QYZd2xj/package.png"
              alt="box"
              className="size-7"
            />
          </div>
          <div>
            <p className="font-bold text-center lg:text-left">FAST DELIVERY</p>
            <p className="text-center lg:text-left">Within 30 minutes</p>
          </div>
        </div>

        {/* Absolute Dining */}
        <div className="flex items-center gap-x-4">
          <div className="p-4 bg-white rounded-full shadow-lg">
            <img
              src="https://i.ibb.co.com/q9YFCMB/medal.png"
              alt="medal"
              className="size-7"
            />
          </div>
          <div>
            <p className="font-bold text-center lg:text-left">ABSOLUTE DINING</p>
            <p className="text-center lg:text-left">Best buffet restaurant</p>
          </div>
        </div>

        {/* Pickup Delivery */}
        <div className="flex items-center gap-x-4">
          <div className="p-4 bg-white rounded-full shadow-lg">
            <img
              src="https://i.ibb.co.com/FwKgyJC/bag.png"
              alt="bag"
              className="size-7"
            />
          </div>
          <div>
            <p className="font-bold text-center lg:text-left">PICKUP DELIVERY</p>
            <p className="text-center lg:text-left">Grab your food order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
