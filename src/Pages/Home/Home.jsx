import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import PopularItems from "../PopularItems/PopularItems";
import Testimonials from "../Testimonials/Testimonials";
import BookingForm from "../BookingForm/BookingForm";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <PopularItems />
      <BookingForm />
      <Testimonials />
    </div>
  );
};

export default Home;
