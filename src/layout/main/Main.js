import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <Navbar />
      <div
        className={` ${pathname === "/" ? "max-w-[1480px] px-10" : "max-w-7xl"
          } max-w-[1480px] mx-auto`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
