import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    handleNav();
  }, []);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className=" w-fit   ">
        {" "}
        <p className="tracking-[2px] sm:tracking-[5px]  text-[16px] sm:text-[20px] font-semibold">
          FROZEN SECONDS
        </p>{" "}
        <p className="text-[9px] sm:text-[12px] tracking-[2px] text-gray-300 -mt-[3px]">
          THE WEDDING COMPANY
        </p>{" "}
      </div>
      <ul className="hidden md:flex text-[16px] cursor-pointer">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Gallery</li>
        <li className="p-4">Testimonial</li>
        <li className="p-4">Contact Us</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <GiHamburgerMenu /> : <GiHamburgerMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-full border-r border-r-gray-900 h-full bg-white text-black ease-in-out duration-500 "
            : "fixed left-[-100%] "
        }
      >
        <div className="flex justify-between p-[20px]">
          <div>
            <p>FROZEN SECONDS</p>{" "}
            <p className="text-[10px] -mb-[40px] -mt-[3px]">
              THE WEDDING COMPANY
            </p>
          </div>
          <div onClick={handleNav} className="flex-end">
            <IoClose size={30} />
          </div>
        </div>

        <ul className=" uppercase p-7 mt-6 cursor-pointer">
          <li className="p-6 border-b border-b-gray-700">Home</li>
          <li className="p-6 border-b border-b-gray-700">About</li>
          <li className="p-6 border-b border-b-gray-700">Gallery</li>
          <li className="p-6 border-b border-b-gray-700">Testimonial</li>
          <li className="p-6 border-b border-b-gray-700">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
