import React from "react";
import { HiOutlineStar } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";

const ProductDisplay = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 px-4 py-10 bg-white">
      {/* Product Image */}
      <div className="w-full max-w-md">
        <img
          src="/greenmachine.jpeg"
          alt="product"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="w-full max-w-2xl flex flex-col gap-6">
        <h3 className="text-2xl font-semibold text-green-800">Lagrana Milk</h3>

        <div className="flex items-center gap-4">
          <h5 className="text-lg text-red-600 font-medium">$56.00</h5>
          <h5 className="text-sm text-gray-400 line-through">$69.00</h5>
        </div>

        <div>
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <HiOutlineStar key={i} />
            ))}
          </div>
          <h5 className="text-sm text-green-700 mt-1">Status: In stock</h5>
        </div>

        <p className="text-gray-600 text-sm">
          The point of using Lorem Ipsum is that it has a more-or-less normal
          letter distribution. On the other hand, we denounce and dislike those
          who are so beguiled and demoralized by the charms of pleasure.
        </p>

        {/* Countdown */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>1078</span>
            <span>08</span>
            <span>33</span>
            <span>10</span>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>DAYS</span>
            <span>HRS</span>
            <span>MINS</span>
            <span>SECS</span>
          </div>

          {/* Progress */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Sold: 85</span>
              <span>Available: 15</span>
            </div>
            <progress
              value="85"
              max="100"
              className="w-full h-2 rounded-full overflow-hidden [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-red-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-2">
          <button className="flex-1 min-w-[150px] py-2 bg-green-700 text-white text-xs rounded-sm">
            ADD TO CART
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-sm shadow-sm text-lg">
            <CiHeart />
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-sm shadow-sm text-lg">
            <IoEyeOutline />
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-sm shadow-sm text-lg">
            <TfiReload />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
