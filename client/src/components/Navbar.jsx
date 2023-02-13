import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { navbars } from "../data";
import logo from "../images/logo.jpg";
import { AiOutlineMenu} from 'react-icons/ai'
import { useEffect } from "react";
const Navbar = () => {
  const [active, setActive] = useState(0)
  const [nav, setNav] = useState(false)
  const [auth,setAuth] = useState(localStorage.getItem("authenticated")) 
  const navigate = useNavigate()
  
  const logout = () => {
    setAuth(false)
    localStorage.clear()
    navigate("/")
  } 
  return (
    <div className="h-[5rem] w-full flex justify-between items-center fixed top-0 bg-white z-10">
      <div className="w-[1200px] m-auto flex justify-between">
        <div>
          <img
            src={logo}
            alt="logo"
            className="h-[5rem] object-cover"
          />
        </div>
        <div className="hidden md:flex justify-between items-center">
          {navbars.map((nav, indx) => (
            <Link to={nav.link} key={indx} onClick={() => setActive(indx)}>
               <li className={`ml-10 ${indx===active && "text-red-600"}`}>
                 {nav.name}
              </li>
            </Link> 
          ))}
          {!auth && <div className="flex justify-center items-center">
            <Link className="w-[5rem] p-2 bg-red-600 ml-10 rounded-md text-white text-center" to="/register">Signup</Link>
            <Link className="w-[5rem] p-2 bg-red-600 ml-10 rounded-md text-white text-center" to="/login">Signin</Link>
          </div>}
          {auth &&  <Link to="/">
          <button className="w-[5rem] p-2 bg-red-600 ml-10 rounded-md text-white text-center"
          onClick={logout}
          >Logout</button></Link>}
        </div>
        
        <div className="flex md:hidden justify-center items-center mr-2">
          <AiOutlineMenu onClick={() => setNav(!nav)} className="cursor-pointer text-red-600 " size={30}/>
        </div>
        <div onClick={()=> setNav(false)} className={`${nav? 'fixed w-full left-0 top-[5rem] flex flex-col bg-white px-3':"hidden"} md:hidden`}>
          {navbars.map((nav, indx) => (
            <Link to={nav.link} key={indx} onClick={() => setActive(indx)}>
               <li className={`${indx===active && "text-red-600"} my-2 border-b-2`}>
                 {nav.name}
              </li>
            </Link> 
          ))}
          <div className="flex flex-col justify- items-start">
            <Link className="w-full  p-2 bg-red-600 rounded-md text-white text-center my-2" to="/register">Signup</Link>
            <Link className="w-full  p-2 bg-red-600  rounded-md text-white text-center my-2" to="/login">Signin</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
