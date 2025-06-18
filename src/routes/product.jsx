import React from "react";
import { productData } from "../Utils/data";
import { CiHeart } from "react-icons/ci";
import { HiOutlineStar } from "react-icons/hi2";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Product = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center p-8 mt-[100px] bg-[#f7f7f7]">
        <div className=" w-full flex flex-col items-center justify-center gap-[15px]">
          <h5 className="text-xs text-lime-500">-Our Products-</h5>
          <h3 className="text-lg text-green-900">What's Hot Items</h3>
          <ul className="w-full flex flex-row items-center justify-center gap-[25px] text-sm text-green-900">
            <li className="text-lime-500">All Products</li>
            <li>Fresh Meat</li>
            <li>Fresh Bakery</li>
            <li>Biscuits Snacks</li>
          </ul>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-[70px] p-8">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[10px]">
            {productData.map((item) => (
              <div
                key={item.title}
                className="flex flex-col   items-center   bg-[#f7f7f7]  gap-[20px] mt-[20px] "
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
          <div className="w-full flex flex-row gap-[10px] mt-[30px] align-center justify-center">
            <h3 className="text-sm text-green-900">
              Discover thousands of other quality products
            </h3>
            <span className=" text-sm text-lime-500">View all products </span>
            <span className="self-center  text-lime-500 justify-self-center">
              <RiArrowRightDoubleLine />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
