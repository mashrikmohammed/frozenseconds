import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

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
        <a href="/">
          {" "}
          <p className="tracking-[2px] sm:tracking-[5px]  text-[16px] sm:text-[20px] font-semibold">
            FROZEN SECONDS
          </p>{" "}
          <p className="text-[9px] sm:text-[12px] tracking-[2px] text-gray-300 -mt-[3px]">
            THE WEDDING COMPANY
          </p>{" "}
        </a>
      </div>
      <ul className="hidden md:flex justify-around w-[500px] text-[16px] cursor-pointer">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className=" nav-item"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
          className=" nav-item"
        >
          About
        </Link>
        <Link
          to="testimonial"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className=" nav-item"
        >
          Testimonial
        </Link>
        <Link
          to="gallery"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className=" nav-item"
        >
          Gallery
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className=" nav-item"
        >
          Contact Us
        </Link>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <GiHamburgerMenu /> : <GiHamburgerMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-full flex-col border-r border-r-gray-900 h-full text-white navm  ease-in-out duration-500 "
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

        <ul className=" uppercase p-7 w-full mt-6 cursor-pointer  ">
          <br />
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleNav}
            className="p-6 nav-item"
          >
            Home
          </Link>{" "}
          <br /> <br /> <br />
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={handleNav}
            className="p-6 nav-item"
          >
            About
          </Link>{" "}
          <br /> <br /> <br />
          <Link
            to="testimonial"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            onClick={handleNav}
            className="p-6 nav-item"
          >
            Testimonial
          </Link>{" "}
          <br /> <br /> <br />
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleNav}
            className="p-6 nav-item"
          >
            Gallery
          </Link>{" "}
          <br /> <br /> <br />
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleNav}
            className="p-6 nav-item "
          >
            Contact Us
          </Link>{" "}
          <br /> <br /> <br />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
