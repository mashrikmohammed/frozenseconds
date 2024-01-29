import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

function TestimonialSec() {
  return (
    <div id="testimonial" className="testidiv py-[0px] md:py-[60px]  ">
      <div className="textdiv">
        <h1 className="text-[35px] sm:text-[48px] font-[700] leading-[45px]">
          Client Testimonials
        </h1>
        <p className=" text-[20px] sm:text-[24px] font-[500] text-gray-600 mt-[10px]">
          Hear from Our Satisfied Customers
        </p>
      </div>

      <div className="mt-[40px]   col lg:flex justify-between items-center ">
        <div className="hidden lg:block ">
          <MdArrowBackIosNew size={40} />
        </div>
        <div className="w-[20%] kmdiv rounded-[12px] bg-white pt-[50px] pl-[10px] sm:pl-[20px] pr-[10px] sm:pr-[40px] pb-[30px] text-gray-600">
          <div className="text-[14px] sm:text-[16px]">
            I had the pleasure of working with Frozen Seconds for my wedding
            photography, and I couldn't be happier with the results. Their team
            was professional, creative, and attentive to every detail. The
            photos turned out absolutely stunning and captured the beauty and
            emotion of our special day perfectly. I would highly recommend
            Frozen Seconds to anyone looking for a talented and passionate team
            of photographers.
          </div>
          <div className="flex mt-[40px] text-black items-center ">
            <div>
              <img
                className="rounded-[50px] border border-yellow-500"
                src={require("./assets/MV5BYmY1OTU4NjAtMjBlMS00YjBlLWFhNmMtZDQ0MzBlM2YyZTBhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@ 1.png")}
                alt=""
              />
            </div>
            <div className="ml-[10px]">
              <h1 className="text-[15px] sm:text-[19px] font-[600]">
                Kavya Madhavan
              </h1>
              <p className=" text-[12px] sm:text-[15px] ">Film Actress</p>
            </div>
          </div>
        </div>

        <div className="w-[20%] kmdiv rounded-[12px] bg-white pt-[50px] pl-[10px] sm:pl-[20px] pr-[10px] sm:pr-[40px] pb-[30px] text-gray-600">
          <div className="text-[14px] sm:text-[16px]">
            I had the pleasure of working with Frozen Seconds for my wedding
            photography, and I couldn't be happier with the results. Their team
            was professional, creative, and attentive to every detail. The
            photos turned out absolutely stunning and captured the beauty and
            emotion of our special day perfectly. I would highly recommend
            Frozen Seconds to anyone looking for a talented and passionate team
            of photographers.
          </div>
          <div className="flex mt-[40px] text-black items-center ">
            <div>
              <img
                className="rounded-[50px] border border-yellow-500"
                src={require("./assets/MV5BYmY1OTU4NjAtMjBlMS00YjBlLWFhNmMtZDQ0MzBlM2YyZTBhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@ 1.png")}
                alt=""
              />
            </div>
            <div className="ml-[10px]">
              <h1 className="text-[15px] sm:text-[19px] font-[600]">
                Kavya Madhavan
              </h1>
              <p className=" text-[12px] sm:text-[15px] ">Film Actress</p>
            </div>
          </div>
        </div>

        <div className="w-[20%] kmdiv rounded-[12px] bg-white pt-[50px] pl-[10px] sm:pl-[20px] pr-[10px] sm:pr-[40px] pb-[30px] text-gray-600">
          <div className="text-[14px] sm:text-[16px]">
            I had the pleasure of working with Frozen Seconds for my wedding
            photography, and I couldn't be happier with the results. Their team
            was professional, creative, and attentive to every detail. The
            photos turned out absolutely stunning and captured the beauty and
            emotion of our special day perfectly. I would highly recommend
            Frozen Seconds to anyone looking for a talented and passionate team
            of photographers.
          </div>
          <div className="flex mt-[40px] text-black  items-center ">
            <div>
              <img
                className="rounded-[50px] border border-yellow-500"
                src={require("./assets/MV5BYmY1OTU4NjAtMjBlMS00YjBlLWFhNmMtZDQ0MzBlM2YyZTBhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@ 1.png")}
                alt=""
              />
            </div>
            <div className="ml-[10px]">
              <h1 className="text-[15px] sm:text-[19px] font-[600]">
                Kavya Madhavan
              </h1>
              <p className=" film-p text-[12px] sm:text-[15px] ">
                Film Actress
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block ">
          <MdArrowForwardIos size={40} />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSec;