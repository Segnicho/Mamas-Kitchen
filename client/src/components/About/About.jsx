import React from "react";
import mamas from "../../images/mamas.png";

const About = () => {
  return (
    <div className="grid md:grid-cols-2 mt-[10rem] justify-center items-center gap-6">
      <div>
        <img  src={mamas} alt="" />
      </div>
      <div className="px-10">
        <h1
        data-aos = "fade-left"
         className="text-4xl">About</h1>
        <div className="h-1 bg-red-600 w-[6rem] mt-3"></div>
        <p data-aos="fade-up" data-aos-delay="400" className="my-7 font-light ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          molestias libero ipsa voluptas, quos doloribus a odio culpa ut, animi
          quis inventore saepe non voluptate magnam minima pariatur, itaque
          tenetur.
        </p>
        <p data-aos="fade-up" data-aos-delay="600" className="my-7 font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          molestias libero ipsa voluptas, quos doloribus a odio culpa ut, animi
          quis inventore saepe non voluptate magnam minima pariatur, itaque
          tenetur.
        </p>
        <p data-aos="fade-up" data-aos-delay="800" className="my-7 font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          molestias libero ipsa voluptas, quos doloribus a odio culpa ut, animi
          quis inventore saepe non voluptate magnam minima pariatur, itaque
          tenetur.
        </p>
      </div>
    </div>
  );
};

export default About;
