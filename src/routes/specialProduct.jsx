import React from "react";
import { specialProductData } from "../Utils/data";
import { CiHeart } from "react-icons/ci";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { HiOutlineStar } from "react-icons/hi2";

const SpecialProduct = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h5 className="text-xs text-lime-500">-Special Products-</h5>
        <h3 className="text-xl md:text-2xl text-green-900 font-semibold mt-2">
          Weekly Food Offers
        </h3>
        <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quia
          suscipit officiis.
        </p>
      </div>

      {/* Product Grid */}
      <div className="w-full flex flex-col items-center justify-center  p-8">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[10px] ">
          {specialProductData.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center bg-[#f7f7f7] mt-[20px] "
            >
              <div className=" w-[200px] relative ">
                <span
                  className={`absolute top-[5px] left-[0] text-xs ${item.bgColor}`}
                >
                  {item.tag}
                </span>
                <span className="absolute top-[10px] right-[10px] text-lg text-green-500">
                  <CiHeart />
                </span>
                <div className="  w-full h-[270px] bg-white">
                  <img
                    src={item.image}
                    className=" object-contain w-full h-[270px]"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col items-center  justify-between gap-[10px]">
                <h3 className="text-sm text-green-500">{item.title}</h3>
                <div className="w-full flex flex-row items-center justify-center gap-[5px] text-yellow-500">
                  <HiOutlineStar />
                  <HiOutlineStar />
                  <HiOutlineStar />
                  <HiOutlineStar />
                  <HiOutlineStar />
                </div>
                <div className="w-full flex flex-row items-center text-center align-center gap-[20px] justify-center">
                  <span className={`text-sm ${item.textColor}`}>
                    {item.price}
                  </span>
                  <span className="text-xs text-gray-500 line-through">
                    {item.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-wrap justify-center items-center gap-2 mt-12">
        <h3 className="text-sm text-green-900 text-center">
          Discover thousands of other quality products
        </h3>
        <span className="text-sm text-lime-500 cursor-pointer">
          View all products
        </span>
        <span className="text-lime-500">
          <RiArrowRightDoubleLine />
        </span>
      </div>
    </section>
  );
};

export default SpecialProduct;
