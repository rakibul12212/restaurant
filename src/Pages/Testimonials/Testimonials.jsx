// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const data = [
  {
    review:
      "The Chicken Mandi was delicious! The chicken was so tender and well-seasoned. The rice was flavorful and complemented the chicken beautifully. It’s a great option for a satisfying meal, and I’ll be coming back for more!",
    user_name: "KHALID AL DAWSRY",
    user_location: "Jedda, Saudi",
    user_photo: "https://i.ibb.co.com/zhxyD0C/Image.png",
    recipe_video: "https://i.ibb.co.com/TTSSJGL/Video.png",
  },
  {
    review:
      "The Chicken Mandi was delicious! The chicken was so tender and well-seasoned. The rice was flavorful and complemented the chicken beautifully. It’s a great option for a satisfying meal, and I’ll be coming back for more!",
    user_name: "John Smith",
    user_location: "London, UK",
    user_photo: "https://i.ibb.co.com/zhxyD0C/Image.png",
    recipe_video: "https://i.ibb.co.com/TTSSJGL/Video.png",
  },
  {
    review:
      "I tried the Chicken Mandi, and it exceeded my expectations. The flavors were rich, and the chicken was tender and moist. It's a dish I would definitely order again. The spices were perfect—just the right amount of heat!",
    user_name: "Sophia Lee",
    user_location: "Toronto, Canada",
    user_photo: "https://i.ibb.co.com/zhxyD0C/Image.png",
    recipe_video: "https://i.ibb.co.com/TTSSJGL/Video.png",
  },
  {
    review:
      "The Chicken Mandi was delicious! The chicken was so tender and well-seasoned. The rice was flavorful and complemented the chicken beautifully. It’s a great option for a satisfying meal, and I’ll be coming back for more!",
    user_name: "James Carter",
    user_location: "Sydney, Australia",
    user_photo: "https://i.ibb.co.com/zhxyD0C/Image.png",
    recipe_video: "https://i.ibb.co.com/TTSSJGL/Video.png",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [currentIndex]);

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

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-36 2xl:px-36">
      <div className="container mx-auto py-20 bg-testimonial-bg bg-cover bg-center">
        <div>
          <p className="mb-4 flex gap-x-4">
            <span className="text-red-700">&#9632;</span>
            <span className="text-red-700 font-medium">
              Crispy, Every Bite Taste
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center mb-8">
          <p className="text-3xl font-bold py-2">
            WHAT SOME OF MY CUSTOMERS SAY
          </p>
          <div className="hidden md:flex justify-between items-center gap-4">
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
        <div className="flex flex-col md:flex-row bg-[#FEBF00] mt-16 gap-8 md:gap-16">
          <div className="py-16 px-6 md:px-20 md:ps-28 flex-1">
            <span>
              <img
                src="https://i.ibb.co.com/Xk3fy11/text.png"
                alt=""
                className="size-6 relative right-6 top-4"
              />
            </span>
            <p className="text-xl pb-8 max-w-[386px] relative">
              {data[currentIndex].review}
            </p>
            <div className="flex justify-between items-center gap-x-4 border-b-2 border-black">
              <div>
                <p className="font-bold">{data[currentIndex].user_name}</p>
                <p className="text-gray-900">
                  {data[currentIndex].user_location}
                </p>
              </div>
              <div className="hover:border-b-4 hover:border-red-600 pb-2">
                <img
                  src={data[currentIndex].user_photo}
                  alt={data[currentIndex].user_name}
                  className="w-12 h-12 rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={data[currentIndex].recipe_video}
              alt="Recipe"
              className="w-full h-full shadow-md"
            />
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-6 md:hidden">
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
    </div>
  );
};

export default Testimonials;
