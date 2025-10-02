import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
        <img
          src="/background.jpg"
          alt="Banner"
          className="md:w-full h-full object-cover absolute inset-0"
        />

        <div className="absolute left-6 md:left-24 top-20 w-[90%] md:w-[350px] flex flex-col items-start gap-4 p-4 z-10">
          <h1 className="text-2xl md:text-4xl font-semibold text-lime-500">
            The Most Healthy Organic Foods
          </h1>
          <p className="text-sm text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem
            unde nisi eligendi adipisci quod.
          </p>
          <button className="text-xs px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
