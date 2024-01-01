import React from "react";

function AboutSection() {
  return (
    <div id="about"  className=" aboutdiv col md:flex justify-between mt-[60px] items-center">
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
          <h1 className="text-[35px] sm:text-[48px] font-[700]">About</h1>
          <p className="text-[20px] sm:text-[24px] font-[500] text-gray-600 -mt-[8px]">
            Our Photography
          </p>
        </div>

        <br />
        <p className="text-justify text-gray-700 m-auto text-[14px] sm:text-[16px]">
          At Frozen Seconds, we believe that photography is a powerful medium
          for capturing life's most precious moments. Our team of experienced
          photographers is passionate about creating beautiful, timeless images
          that tell your unique story. Whether you're looking for wedding
          photography, family portraits, or commercial shoots, we're here to
          help you freeze those special moments in time. <br /> <br /> We pride
          ourselves on our creativity, attention to detail, and commitment to
          excellence. We take the time to understand your vision and work
          closely with you to bring it to life. Our goal is to deliver stunning
          images that you'll cherish for a lifetime. We use only the highest
          quality equipment and software to ensure that your images are of the
          highest quality possible.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
