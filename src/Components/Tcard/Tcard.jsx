import React from "react";
import "./Tcard.scss";

export default function Cards({ author, prof, image, para }) {
  return (
    <div className="card_container">
        <>
        <img className="comma" src="assets/testimonials/comma.png" alt="comma" />
      <p>{para}</p>
        </>
 
      <div className="card_author_container">
        <img src={image} alt="" />
        <div className="author_details_wrapper">
          <p className="author_name">{author}</p>
          {prof &&
          <p className="author_prof">{prof}</p> }
        </div>
      </div>
    </div>
  );
}
