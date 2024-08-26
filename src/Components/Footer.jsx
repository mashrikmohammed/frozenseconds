import React from "react";

function Footer() {
  return (
    <div className="footer items-center text-center py-[40px] justify-center">
      <a href="/">
        <div>
          {" "}
          <p
            style={{ fontFamily: "VilakaModernSerif" }}
            className="tracking-[2px] sm:tracking-[5px] text-gray-300 text-[20px] sm:text-[30px] font-semibold"
          >
            Praanatantra
          </p>{" "}
          {/* <p
            style={{ fontFamily: "VilakaModernSerif" }}
            className="text-[9px] sm:text-[12px] tracking-[2px] text-gray-300 -mt-[3px]"
          >
            THE WEDDING COMPANY
          </p>{" "} */}
        </div>
      </a>
      <div className="flex justify-center gap-3 mt-[30px]">
        <a href="https://api.whatsapp.com/send?phone=917592080818">
          <img
            className="cursor-pointer"
            src={require("./assets/whatsapp 1.png")}
            alt=""
          />
        </a>
        <a href="https://www.instagram.com/praanatantra?igsh=NDF1NjdiYjg2a2wx">
          <img
            className="cursor-pointer"
            src={require("./assets/instagram 1.png")}
            alt=""
          />
        </a>
        <a href="https://www.facebook.com/share/VXXvQBpqY4eWwdwZ/?mibextid=WC7FNe">
          <img
            className="cursor-pointer"
            src={require("./assets/facebook 1.png")}
            alt=""
          />
        </a>
      </div>

      <p className="text-[12px] text-gray-300 mt-[50px]">
        © Praanatantra all copyrights reserved
      </p>
    </div>
  );
}

export default Footer;
