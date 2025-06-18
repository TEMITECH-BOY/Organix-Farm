import React from "react";
import { footerData } from "../Utils/data";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { RiTiktokFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-10 px-4 flex flex-col items-center gap-10">
      {/* Footer Feature Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
        {footerData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 text-green-800"
            >
              <Icon className="text-2xl" />
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
          );
        })}
      </div>

      {/* Footer Middle Content */}
      <div className="w-full max-w-3xl flex flex-col items-center gap-4 text-center">
        <img src="/Organix_1.webp" alt="logo" className="w-[100px] h-[40px]" />
        <p className="text-xs text-gray-500 leading-relaxed px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati maiores cupiditate voluptas doloribus. Dolorum, repellat
          illum doloremque, eveniet quisquam adipisci fugiat possimus.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 text-green-800 text-xl mt-2">
          <FaXTwitter />
          <BiLogoFacebook />
          <IoLogoInstagram />
          <FaYoutube />
          <RiTiktokFill />
        </div>

        {/* Policy Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 mt-4">
          <span>Privacy Policy</span>
          <span>Refund Policy</span>
          <span>Terms of Service</span>
          <span>Contact Information</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-2">
          &copy; 2025 Organic by{" "}
          <span className="text-green-600">Alothemes</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
