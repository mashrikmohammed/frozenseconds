import React from "react";

function AboutSection() {
  return (
    <div
      id="about"
      className=" aboutdiv col md:flex justify-between mt-[60px] items-center"
    >
      <div className="flex picdiv w-fit  ">
        <div className="">
          <div className="pic1 w-[130px] xs:w-[150px] sm:w-[200px] md:w-[250px] h-[200px] sm:h-[250px] md:h-[400px]"></div>
          <div className="pic2 sm:w-[200px] md:w-[250px] h-[130px] md:h-[200px] mt-[9px] sm:mt-[15px] "></div>
        </div>
        <div className=" ml-[9px] sm:ml-[15px]">
          <div className="pic3 sm:w-[200px] md:w-[250px] h-[130px] md:h-[200px]"></div>
          <div className="pic4 mt-[9px] sm:mt-[15px] w-[130px] xs:w-[150px] sm:w-[200px] md:w-[250px] h-[200px] sm:h-[250px] md:h-[400px]"></div>
        </div>
      </div>
      <div className="w-fit md:w-[50%] ">
        <div className="textdiv">
          {" "}
          <h1 className="text-[35px] sm:text-[48px] font-[700]">About us</h1>
          {/* <p className="text-[20px] sm:text-[24px] font-[500] text-gray-600 -mt-[8px]">
            Our Photography
          </p> */}
        </div>

        <br />
        <p className="text-justify text-gray-700 m-auto text-[14px] sm:text-[16px]">
          Praanatantra is a celebration of the elegance found in simplicity. Our
          designs focus on timeless minimalism, blending style, comfort, and
          versatility in every piece. We believe that true beauty lies in
          clarity and understated sophistication. <br/><br/>Dedicated to quality and
          sustainability, we craft our garments with care and respect for
          ethical practices. At Praanatantra, each creation is a testament to
          our commitment to offering refined, enduring fashion that transcends
          trends.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
