import React from "react";
import "./Common.css";
import Header from "./Header";
import { RxDoubleArrowDown } from "react-icons/rx";
function HeroSection() {
  return (
    <div id="home" className="hero-div bg-no-repeat h-[100vh] text-center     bg-cover  bg-center   ">
      <Header />
      <div className="text-center headdiv flex flex-col justify-center items-center h-[100vh] px-[10px] ">
        {" "}
        <h1 className="text-white text-[33px]  xs:text-[35px] leading-[40px] xs:leading-[50px] sm:leading-[70px] sm:text-[58px]   font-semibold">
          Acknowledge the elegance of simplicity
        </h1>
        {/* <p className="text-gray-300 text-[18px] sm:text-[24px] tracking-[1px] sm:tracking-[2px] ">
          High-Quality Images That Tell Your Story
        </p> */}
      </div>
      <div>
        <p className="text-white text-[10px]  -mt-[100px] sm:text-[15px]">
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
