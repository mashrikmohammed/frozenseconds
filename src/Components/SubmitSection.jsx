import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function SubmitSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qc49yum", "template_0ondyrb", form.current, {
        publicKey: "b_xwCFaJqNCVpoXL6",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Submitted");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="bg-white items-center col md:flex mt-[150px] md:mt-[40px] rounded-[15px] px-[10px] sm:px-[20px] justify-around submit py-[50px]"
    >
      <div className="textdiv">
        <h1 className="text-[25px] sm:text-[48px] font-[700] leading-[45px]">
          Get in Contact
        </h1>
        <p className=" text-[15px] leading-[20px] sm:leading-[35px] sm:text-[24px] font-[500] text-gray-600 mt-[10px]">
          We're Here to Answer Your Questions and <br /> Help You in Any Way We
          Can.
        </p>
        <div className="contact-div">
          <a href="mailto:praanatantra@gmail.com"> <div className="flex gap-2   items-center mt-[40px]">
            <img
              className="cursor-pointer"
              src={require("./assets/gmail 1.png")}
              alt=""
            />{" "}
            <p className=" text-[12px] cursor-pointer sm:text-[14px] font-semibold">
              praanatantra@gmail.com
            </p>
          </div></a>
         
          <a href="https://api.whatsapp.com/send?phone=917592080818"><div className="flex mt-[5px] sm:mt-[15px] gap-2 items-center m-auto">
            <img
              className="cursor-pointer"
              src={require("./assets/whatsapp 1.png")}
              alt=""
            />{" "}
           
            <p className="text-[12px] cursor-pointer sm:text-[14px] font-semibold">
              {" "}
              +917592080818
            </p>
          </div></a>
        
        </div>
      </div>
      <div className="form px-[8px] mt-[40px] md:mt-[0] sm:px-[20px] w-auto md:w-[500px] py-[40px] rounded-md items-center">
        <form onSubmit={sendEmail} ref={form} className="text-gray-500">
          <label for="name" className="text-gray-700 text-[14px]" htmlFor="">
            Full Name
          </label>
          <br />
          <input
          required
            id="name"
            name="name"
            className="outline-none w-full p-[6px] rounded-md"
            type="text"
          />
          <br />
          <label for="email" className="text-gray-700 text-[14px]" htmlFor="">
            <div>
              {" "}
              <br />
            </div>
            Email Address
          </label>
          <br />
          <input
          required
            id="email"
            name="email"
            className="outline-none w-full p-[6px] rounded-md"
            type="email"
          />
          <br />
          <label for="message" className="text-gray-700 text-[14px]" htmlFor="">
            <div>
              {" "}
              <br />
            </div>
            Message
          </label>
          <br />
          <textarea
          required
            className="outline-none p-[6px] resize-none w-full rounded-md"
            name="message"
            id="message"
            rows="6"
          ></textarea>{" "}
          <br />
          <div className="text-center ">
            <button
              value="send"
              type="submit"
              className=" py-[10px] sm:py-[15px] px-[35px] sm:px-[55px] text-white btn mt-[30px] rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubmitSection;
