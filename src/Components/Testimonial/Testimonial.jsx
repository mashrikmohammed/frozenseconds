import React, { useState } from "react";
import Cards from "../Tcard/Tcard";
import "./Testimonial.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Navbuttons from "../NavButtons";
import HeadPara from "../HeadPara/HeadPara";
import { Testimonial } from "./testimonial.data";
export default function Testimonials() {
  const [swiperinstance, setSwiperinstance] = useState();
  const breakpoints = {
    100: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    801: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1254: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  };

  return (
    <div id="testimonial" className="testimonial_container">
      <HeadPara
        head="Client Testimonials"
        para={"Hear from Our Satisfied Customers"}
      />
      <div className="flex">
        <Navbuttons type={2} swiper={swiperinstance}>
          <GrFormPrevious />
        </Navbuttons>
        <Swiper
          modules={[Navigation,Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          breakpoints={breakpoints}
          onSwiper={(swiper) => setSwiperinstance(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {Testimonial &&
            Testimonial.map((items,index) => (
              <div key={index+1} style={{ height: "100%" }}>
                <SwiperSlide>
                  <Cards
                    para={items.Testimonial}
                    image="/assets/testimonials/kavya.jpg"
                    author={items.author}
                    prof="Film Actress"
                  />
                </SwiperSlide>
              </div>
            ))}
        </Swiper>
        <Navbuttons type={1} swiper={swiperinstance}>
          <GrFormNext />
        </Navbuttons>
      </div>
    </div>
  );
}
