import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const RootPage = () => {
  return (
    <div>
      <div className="navContainer   ">
        <NavBar />
      </div>

      <div className="mainContainer  pt-[4.2rem] ">
        <Outlet />
      </div>

      <div className="footerContainer bg-red-500 ">
        <Footer />
      </div>
    </div>
  );
};

export default RootPage;
