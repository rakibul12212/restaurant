import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-center  max-w-[1320px] mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
