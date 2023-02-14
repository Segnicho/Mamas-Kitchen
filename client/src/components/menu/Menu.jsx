import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../api";
import { foods } from "../../data";
import foodImg from '../../images/hero3.jpg' 
import Button from "../Button";

const Menu = () => {
  const [foods,setFoods] = useState([])
  console.log(foods)
  useEffect(() => {
    const fetchFoods = async () => {
      const response = await axios.get(`${baseUrl}/foods`)
      setFoods(response.data)
    }
    fetchFoods()
  },[])
  return (
    <div className="py-[5rem] flex flex-col items-center bg-slate-200 w-full">

      <div className="flex justify-center flex-col">
        <h1 className="text-center mb-3 font-light text-2xl">Exprience</h1>
        <h1 className="text-center mt-5 text-2xl">DELICIOUS MENU</h1>
      </div>
      <div className="my-14 flex flex-wrap m-auto justify-around items-center">
        <Button title="Pizza" />
        <Button title="Burger" />
        <Button title="Pizza" />
        <Button title="Burger" />
      </div>
      <div className="grid md:grid-cols-2 items-center justify-center gap-10 mx-3 cursor-pointer">
        {foods.map((food, indx) => (
          <Link to={`/food/${food._id}`}>
            <div
            key={indx}
            data-aos="fade-up"
                data-aos-delay={indx * 400}
            className="bg-white flex p-3 max-w-[60vh] rounded-md gap-6 h-[10rem]"
          >
            <div>
              <h1 className="text-2xl">{food.title}</h1>
              <p className="my-3">{food.desc}</p>
              <div className="flex justify-between">
                <h1>${food.price}</h1>
                {food.rating}
              </div>
            </div>
            <div>
              <img
                className="w-[40vh] h-[100%] object-cover"
                src={foodImg}
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

export default Menu;
