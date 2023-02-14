
import React from "react";
import { useState } from "react";
import bgImage from "../../images/loginbg.jpg";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const url = 'http://127.0.0.1:5000/api/auth'
  const [user,setUser] = useState({username:'', email:'',password:'', phoneNum:''})

  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
     await axios.post(`${url}/register`,user);
     alert("Successfully registered")
     navigate('/login')
    } catch (err) {
      console.log(err)
      alert("Error registering")
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    setUser({...user,[e.target.id]:e.target.value})
  }
  return (
    <div className="mt-[9rem] flex justify-center items-center h-[80vh]">
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
          <h1 className="text-3xl">Register</h1>
        </div>
        <input
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-10 p-[8px] rounded-sm  focus:outline-blue-600 text-black"
          type="text"
          id="username"
          onChange={handleChange}
          placeholder="user name"
        />
        <input
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-10 p-[8px] rounded-sm focus:outline-blue-600 text-black"
          type="email"
          id="email"
          onChange={handleChange}
          placeholder="email"
        />
         <input
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-10 p-[8px] rounded-sm focus:outline-blue-600 text-black"
          type="number"
          id = "phoneNum"
          onChange={handleChange}
          placeholder="phone number"
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
