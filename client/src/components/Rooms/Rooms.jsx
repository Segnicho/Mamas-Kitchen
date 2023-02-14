import React from "react";
import { rooms } from "../../data";
import { useEffect } from "react";
import { baseUrl} from '../../api'
import { useState } from "react";
import axios from 'axios'
import roomImg from '../../images/hotel5.jpg'
import { Link } from "react-router-dom";

const Rooms = () => {
  const [rooms,setRooms] = useState([])
  console.log(rooms)
  useEffect(() => {
    const fetchRooms = async () => {
      const response = await axios.get(`${baseUrl}/rooms`)
      setRooms(response.data)
    }
    fetchRooms()
  },[])
  return (
    <div className="flex flex-col justify-center items-center bg-slate-200 pb-10">
        <div className="flex flex-col justify-center items-center my-20">
          <h1 className="text-3xl font-thin">OUR ROOMS</h1>
          <div className="h-1 bg-red-600 w-[8rem] mt-3"></div>
        </div>
      <div className="grid md:grid-cols-2 items-center justify-center gap-10 mx-3 cursor-pointer">
        {rooms.map((room, indx) => (
          <Link to={`$rooms/${room._id}`}>
          <div
            key={indx}
            data-aos="fade-up"
            data-aos-delay={indx * 400}
            className="bg-white flex p-3 max-w-[60vh] rounded-md gap-6"
          >
            <div>
              <h1 className="text-2xl">{room.title}</h1>
              <p className="my-3">{room.desc}</p>
              <div className="flex justify-between">
                <h1>${room.price}</h1>
                {room.rating}
              </div>
            </div>
            <div>
              <img
                className="w-[40vh] h-[100%] object-cover"
                src={roomImg}
                alt=""
              />
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
