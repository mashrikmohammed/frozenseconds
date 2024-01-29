import React from "react";
import './Testimonial/Testimonial.scss'

export default function Navbuttons({ children, swiper, type }) {
   
  return (
    <p className={type===1? 'next' : ' prev'}  onClick={() => (type === 1 ? swiper.slideNext() : swiper.slidePrev())}>
      {children}
    </p>
  );
}