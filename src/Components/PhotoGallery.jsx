import React from "react";

function PhotoGallery() {
  return (
    <div id="gallery" className="py-[30px] sm:py-[60px] items-center">
      <div className="textdiv">
        <h1 className="text-[35px] sm:text-[48px] font-[700] leading-[45px]">
          Captured Moments
        </h1>
        <p className=" text-[20px] sm:text-[24px] font-[500] text-gray-600 mt-[10px]">
          Life Through Our Lens
        </p>
      </div>
      <div className="container py-[30px]">
        <div className="item img1"></div>

        <div className="item img2"> </div>

        <div className="item img3"></div>

        <div className="item img4"> </div>

        <div className="item img5"> </div>

        <div className="item img6"> </div>

        <div className="item img7"></div>

        <div className="item img8"> </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
