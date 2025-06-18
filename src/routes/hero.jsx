import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-[#f6f6f6] flex flex-col-reverse lg:flex-row items-center justify-between p-6 lg:p-12 gap-10">
      {/* Image Section */}
      <div className="flex justify-center items-center w-full max-w-md">
        <img
          src="/hero.jpeg"
          alt="fruit basket"
          className="w-full h-auto object-cover "
        />
      </div>{" "}
      {/* Text Section */}
      <div className="flex flex-col gap-5 text-center lg:text-left items-center lg:items-start max-w-xl mx-auto">
        <span className="text-sm text-lime-400 tracking-wide">
          WELCOME TO OUR FARM
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-green-800 font-semibold leading-tight">
          Fresh Bread <br /> Oatmeal Crumbles.
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Presentation matters. Our fresh Vietnamese vegetables look good and
          taste even better.
        </p>
        <button className="bg-green-800 text-white text-sm px-6 py-2 rounded-2xl hover:bg-green-700 transition self-center lg:self-start">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
