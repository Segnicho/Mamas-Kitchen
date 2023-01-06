import React from "react";
import { navbars } from "../data";
import logo from "../images/logo.jpg";

const Navbar = () => {
  return (
    <div className=" p-2 h-[5rem] max-w-[1200px] m-auto flex justify-between items-center bg-transparent">
      <div>
        <img src={logo} alt="logo" className="h-[5rem] r-[5rem] object-cover" />
      </div>
      <div className="flex justify-center items-center">
        {navbars.map((nav, indx) => (
          <li className="ml-5" key={indx}>{nav}</li>
        ))}
        <button className="ml-5 bg-red-600 text-white p-2 rounded-md">Sign up</button>
        <button className="ml-5 bg-red-600 text-white p-2 rounded-md">Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
