import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const RootPage = () => {
  return (
    <div>
      <div className="navContainer   ">
        <NavBar />
      </div>

      <div className="mainContainer">
        <Outlet />
      </div>
    </div>
  );
};

export default RootPage;
