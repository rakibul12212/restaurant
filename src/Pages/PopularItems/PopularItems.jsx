import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const data = [
  {
    img: "https://i.ibb.co.com/jHX0Snd/Frame-1707478074.png",
    title: "VEGETABLES BURGER",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    img: "https://i.ibb.co.com/hsjWFyY/Frame-1707478074-1.png",
    title: "SPECIAL PIZZA",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    img: "https://i.ibb.co.com/9s7QP2R/Frame-1707478074-2.png",
    title: "SPECIAL FRENCH FRIES",
    description: "Barbecue Italian cuisine",
  },
  {
    img: "https://i.ibb.co.com/RykKCnc/Frame-1707478074-3.png",
    title: "CUISINE CHICKEN",
    description: "Japanese Cuisine Chicken",
  },
  {
    img: "https://i.ibb.co.com/jHX0Snd/Frame-1707478074.png",
    title: "VEGETABLES BURGER",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    img: "https://i.ibb.co.com/hsjWFyY/Frame-1707478074-1.png",
    title: "SPECIAL PIZZA",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    img: "https://i.ibb.co.com/9s7QP2R/Frame-1707478074-2.png",
    title: "SPECIAL FRENCH FRIES",
    description: "Barbecue Italian cuisine",
  },
  {
    img: "https://i.ibb.co.com/RykKCnc/Frame-1707478074-3.png",
    title: "CUISINE CHICKEN",
    description: "Japanese Cuisine Chicken",
  },
];

const PopularItems = () => {
  const itemsPerPage = 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= data.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const visibleItems = [
    ...data.slice(currentIndex, currentIndex + itemsPerPage),
    ...data.slice(0, Math.max(0, currentIndex + itemsPerPage - data.length)),
  ].slice(0, itemsPerPage);

  return (
    <div className="px-4 sm:px-6 lg:px-0 2xl:px-0">
      <div className="container mx-auto px-20 py-20 bg-popular-bg bg-cover bg-center">
        <div>
          <p className="y-20 flex gap-x-4">
            <span className="text-red-700 size-2">&#9632;</span>
            <span className="text-red-700 font-medium">
              Crispy, Every Bite Taste
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-3xl font-bold py-2">POPULAR FOOD ITEMS</p>
          </div>
          <div className="flex gap-x-4">
            <button
              onClick={handlePrevious}
              className="bg-white shadow-lg p-3 rounded-full hover:text-red-700"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={handleNext}
              className="bg-white shadow-lg p-3 rounded-full hover:text-red-700"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center mt-10">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-sm py-4 text-center flex flex-col items-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="border-red-700 border-b-2 w-[120px] h-[120px]"
              />
              <div className="py-2">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularItems;
