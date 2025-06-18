import React from "react";
import { IoStar } from "react-icons/io5";

const Client = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Background Image */}
      <img
        src="/banner2.avif"
        alt="Banner"
        className="w-full h-[500px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[500px] h-full flex flex-col items-center justify-center gap-4 p-6 bg-white bg-opacity-80 rounded-lg">
        <h1 className="text-xl text-green-800 font-semibold">Client Says</h1>

        <div className="w-[50px] h-[50px] rounded-full border flex items-center justify-center">
          <img
            src="/client.jpg"
            alt="Client"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <p className="text-sm text-center text-gray-600 px-2">
          "Also like the fact that I can pick my staple in the brown paper bag
          and glass containers at the Zero waste section, with an idea to reduce
          plastic and also more convenient."
        </p>

        <div className="flex gap-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <IoStar key={i} />
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-green-800 text-sm font-medium">Alexander Ball</h3>
          <p className="text-xs text-gray-500">New York</p>
        </div>

        {/* Dot Indicators */}
        <div className="flex gap-2 mt-2">
          <span className="w-4 h-4 flex items-center justify-center border rounded-full">
            <span className="w-2 h-2 bg-green-800 rounded-full"></span>
          </span>
          <span className="w-2 h-2 rounded-full bg-lime-500"></span>
          <span className="w-2 h-2 rounded-full bg-lime-500"></span>
        </div>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Trusted Customers are our happiness{" "}
          <span className="text-green-600 underline cursor-pointer">
            Contact Us
          </span>
        </p>
      </div>
    </div>
  );
};

export default Client;
