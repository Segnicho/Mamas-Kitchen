import React from "react";
import { useState } from "react";
import bgImage from "../../images/loginbg.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const url = 'http://127.0.0.1:5000/api/auth'
  const [user,setUser] = useState({email:"",password:""}) 
  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
     const res = await axios.post(`${url}/login`,user)
     localStorage.setItem("user", JSON.stringify(res.data))
     localStorage.setItem("authenticated", true)
     navigate('/')
     alert("Logged in successfully")
    } catch (err) {
     alert(err.message)
    }
  }
  const handleChange = (e) => {
    e.preventDefault()
    setUser({...user,[e.target.id]:e.target.value})
  }
  return (
    <div className="mt-[9rem] flex justify-center items-center h-[70vh]">
      <div className="w-[100%] bg-black/40 absolute h-[100%]">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={bgImage}
          alt="loginbg"
        />
      </div>
      
      <form onSubmit={handleSubmit}
       className="text-white relative flex flex-col justify-center">
      <div className="flex justify-center">
        <h1 className="text-3xl">Login</h1>
      </div>
        <input
          data-aos="fade-up"
          data-aos-delay="400"
        className="mt-10 p-[8px] rounded-sm  focus:outline-blue-600 text-black"
          type="text"
          id="email"
          onChange={handleChange}
          placeholder="email"
        />
        <input
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-10 p-[8px] rounded-sm focus:outline-blue-600 text-black"
          type="password"
          id="password"
          onChange={handleChange}
          placeholder="password"
        />
        <button
          data-aos="fade-up"
          data-aos-delay="800"
          className="mt-10 bg-red-600 p-2 text-white rounded-sm"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
