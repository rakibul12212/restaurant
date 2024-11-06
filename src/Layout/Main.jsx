import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <div className=" bg-green-500 max-w-{1920px}">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
