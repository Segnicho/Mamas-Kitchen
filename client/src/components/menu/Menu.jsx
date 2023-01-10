import React from "react";
import { foods } from "../../data";
import Button from "../Button";

const Menu = () => {
  return (
    <div className="py-[5rem] flex flex-col items-center bg-slate-200 w-full">
      {/* <p className="text-center my-[4rem] max-w-[1000px] m-auto text-xl font-thin px-5">
        Our Menu Offers Modern Dishes, Inspired By Historic Italian Gastronomy.
        The A La Carte Menu Is Available Throughout Lunch And Dinner With An
        Additional Set Lunch Menu Offered Monday To Friday Excluding Public
        Holidays.
      </p> */}
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
          <div
            key={indx}
            data-aos="fade-up"
                data-aos-delay={indx * 400}
            className="bg-white flex p-3 max-w-[60vh] rounded-md gap-6"
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
                src={food.img}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
