import React from "react";
import "./Common.css";
import Header from "./Header";
import { RxDoubleArrowDown } from "react-icons/rx";
function HeroSection() {
  return (
    <div className="hero-div bg-no-repeat h-[70vh] sm:h-[80vh] md:h-[100vh]  text-center   bg-cover bg-center  item-center ">
      <Header />
      <div className="mt-[200px] headdiv sm:mt-[300px] md:mt-[450px] text-center p-[10px] ">
        {" "}
        <h1 className="text-white text-[28px] xs:text-[35px] leading-[40px] xs:leading-[50px] sm:leading-[70px] sm:text-[58px]   font-semibold">
          Capture Your Best Moment with Us.
        </h1>
        <p className="text-gray-300 text-[18px] sm:text-[24px] tracking-[1px] sm:tracking-[2px] -mt-[1px] sm:-mt-[10px]">
          High-Quality Images That Tell Your Story
        </p>
      </div>

      <div className="text-center">
        <p className="text-white text-[10px] sm:text-[15px]">
          SCROLL TO KNOW MORE
        </p>
        <p className="text-white m-auto w-[15px] sm:w-[20px]">
          <RxDoubleArrowDown size={20} className="size-20" />
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
