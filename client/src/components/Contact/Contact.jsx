import React from "react";
import mamas from "../../images/mamas.png";

const Contact = () => {
  return (
    <div className="grid md:grid-cols-2 mt-[5rem] justify-center items-center gap-6">
      <div>
        <img className="w-[100%]" src={mamas} alt="" />
      </div>
      <div className="px-10">
        <h1 className="text-2xl">Contact us</h1>
        <div className="h-1 bg-red-600 w-[7rem] my-3"></div>
        <form className="flex flex-col md:w-[80%]">
          <input
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-6 p-[12px] border border-black/50 rounded-sm"
            placeholder="name"
          />
          <input
            data-aos="fade-up"
            data-aos-delay="600"
            className="mt-6 p-[12px] border border-black/50 rounded-sm"
            placeholder="email"
          />
        <input
            data-aos="fade-up"
            data-aos-delay="800"
            className="mt-6 p-[12px] border border-black/50 rounded-sm"
            placeholder="subject"
          />
          <textarea
            data-aos="fade-up"
            data-aos-delay="1000"
            className="mt-6 p-[12px] border border-black/50 rounded-sm"
            rows="4"
            placeholder="message"
          />
          <button
            data-aos="fade-up"
            data-aos-delay="1200"
            className="mt-10 p-[10px] border bg-red-600 text-white rounded-sm"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
