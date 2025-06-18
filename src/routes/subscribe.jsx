import React from "react";
import { FiSend } from "react-icons/fi";

const Subscribe = () => {
  return (
    <section className="w-full bg-green-800 px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="flex items-center text-white gap-2 mb-2">
          <FiSend className="text-2xl" />
          <h2 className="text-2xl">Subscribe to our emails</h2>
        </div>
        <p className="text-xs text-gray-200">
          ...and receive $10 coupon for first shopping
        </p>
      </div>

      {/* Input Section */}
      <div className="w-full max-w-md relative">
        <input
          type="email"
          placeholder="Enter your email here"
          className="w-full h-10 pl-4 pr-[150px] rounded-full text-sm text-green-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="absolute top-0 right-0 h-10 px-4 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
