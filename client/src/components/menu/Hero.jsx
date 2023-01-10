import React from "react";

const Hero = ({image,title}) => {
  return (
    <div className="flex justify-center mt-[5rem] items-center h-[600px]">
       <div className="w-[100%] bg-black/50 absolute h-[600px]">
        <img  className="w-full h-full object-cover mix-blend-overlay"  src={image} alt="" />
       </div>
       <div 
         data-aos="fade-up"
         data-aos-delay="400"
       className="w-[98%] text-white relative flex flex-col justify-center items-center">
        <h1 className="text-4xl">{title}</h1>
       </div>
    </div>
  );
};

export default Hero;
