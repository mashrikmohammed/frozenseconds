import React from "react";

function PhotoGallery() {
  return (
    <div className="py-[30px] sm:py-[60px]">
      <div className="textdiv">
        <h1 className="text-[35px] sm:text-[48px] font-[700] leading-[45px]">
          Captured Moments
        </h1>
        <p className=" text-[20px] sm:text-[24px] font-[500] text-gray-600 mt-[10px]">
          Life Through Our Lens
        </p>
      </div>
      <div className=" columns-2 md:columns-3 mt-[30px]">
        <img src={require("./assets/1.png")} alt="" />
        <img className="mt-[25px]" src={require("./assets/2.png")} alt="" />
        <img
          className="mt-[25px] md:mt-[0px]"
          src={require("./assets/3.png")}
          alt=""
        />
        <img className="mt-[25px]" src={require("./assets/4.png")} alt="" />
        <img className="mt-[25px]" src={require("./assets/5.png")} alt="" />
        <img
          className="mt-[25px] md:mt-[0px]"
          src={require("./assets/6.png")}
          alt=""
        />
        <img className="mt-[25px]" src={require("./assets/7.png")} alt="" />
        <img className="mt-[25px]" src={require("./assets/8.png")} alt="" />
      </div>
    </div>
  );
}

export default PhotoGallery;
