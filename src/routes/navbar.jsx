import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  RiShoppingBag2Line,
  RiArrowDropDownLine,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";
import { navData } from "../Utils/data"; // update path as needed

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <img
            src="/Organix_1.webp"
            alt="company-logo"
            className="w-[100px] h-[40px]"
          />
          <ul className="hidden md:flex items-center gap-5">
            {navData.map((item, index) => (
              <li
                className="flex items-center relative text-sm text-green-900"
                key={index}
              >
                {item.tip && (
                  <span
                    className={`absolute -top-2 -right-3 rounded-sm text-center text-white w-7 text-xs ${item.bgColor}`}
                  >
                    {item.tip}
                  </span>
                )}
                <a href="#">{item.title}</a>
                {item.dropdown && <RiArrowDropDownLine />}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5">
          <IoIosSearch />
          <FaRegCircleUser />
          <span className="relative flex items-center">
            <IoMdHeartEmpty />
            <span className="absolute -top-2 -right-2 text-white w-4 h-4 bg-orange-300 rounded-full text-xs flex items-center justify-center">
              0
            </span>
          </span>
          <span className="relative flex items-center">
            <RiShoppingBag2Line />
            <span className="absolute -top-2 -right-2 text-white w-4 h-4 bg-orange-300 rounded-full text-xs flex items-center justify-center">
              0
            </span>
          </span>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <RiCloseLine size={24} />
            ) : (
              <RiMenu3Line size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow">
          <ul className="flex flex-col gap-4">
            {navData.map((item, index) => (
              <li
                className="flex items-center justify-between text-sm text-green-900"
                key={index}
              >
                <span>{item.title}</span>
                {item.dropdown && <RiArrowDropDownLine />}
              </li>
            ))}
          </ul>
          <div className="flex justify-around mt-4 text-xl">
            <IoIosSearch />
            <FaRegCircleUser />
            <IoMdHeartEmpty />
            <RiShoppingBag2Line />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
