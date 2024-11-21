import React, { useState, useEffect } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 1 : 4);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const visibleItems = data
    .slice(currentIndex, currentIndex + itemsPerPage)
    .concat(
      data.slice(0, Math.max(0, currentIndex + itemsPerPage - data.length))
    )
    .slice(0, itemsPerPage);

  return (
    <div className="px-0 sm:px-6 lg:px-0 2xl:px-0">
      <div className="container mx-auto px-4 py-10 sm:px-20 lg:px-36 sm:py-20 bg-popular-bg bg-cover bg-center text-center lg:text-left">
        <div className="flex justify-between items-center mb-4 lg:mb-8">
          <div>
            <p className="flex  lg:justify-start items-center gap-x-2">
              <span className="text-red-700">&#9632;</span>
              <span className="text-red-700 font-medium">
                Crispy, Every Bite Taste
              </span>
            </p>
            <p className="text-2xl sm:text-3xl font-bold py-2">
              POPULAR FOOD ITEMS
            </p>
          </div>
          <div className="hidden lg:flex gap-x-4">
            <button
              onClick={handlePrevious}
              className="bg-white p-3 rounded-full hover:text-red-700"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={handleNext}
              className="bg-white p-3 rounded-full hover:text-red-700"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 justify-center items-center mt-10">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center w-full max-w-xs lg:max-w-full mx-auto"
            >
              <img
                src={item.img}
                alt={item.title}
                className="border-red-700 border-b-2 w-[100px] h-[100px] mx-auto lg:w-[120px] lg:h-[120px]"
              />
              <div className="py-4">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {itemsPerPage === 1 && (
          <div className="flex justify-center mt-6 gap-4 lg:hidden">
            <button
              onClick={handlePrevious}
              className="bg-white p-3 rounded-full hover:text-red-700"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={handleNext}
              className="bg-white p-3 rounded-full hover:text-red-700"
            >
              <IoIosArrowForward />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularItems;
