import React from "react";

function Footer() {
  return (
    <div className="footer items-center text-center py-[40px] justify-center">
      <div>
        {" "}
        <p style={{fontFamily:'VilakaModernSerif'}}  className="tracking-[2px] sm:tracking-[5px] text-gray-300 text-[20px] sm:text-[30px] font-semibold">
        Praanatantra
        </p>{" "}
        <p style={{fontFamily:'VilakaModernSerif'}}  className="text-[9px] sm:text-[12px] tracking-[2px] text-gray-300 -mt-[3px]">
          THE WEDDING COMPANY
        </p>{" "}
      </div>
      <div className="flex justify-center gap-3 mt-[30px]">
        <img className="cursor-pointer" src={require("./assets/whatsapp 1.png")} alt="" />
        <img className="cursor-pointer" src={require("./assets/instagram 1.png")} alt="" />
        <img className="cursor-pointer" src={require("./assets/facebook 1.png")} alt="" />
      </div>

      <p className="text-[12px] text-gray-300 mt-[50px]">
        © Praanatantra all copyrights reserved
      </p>
    </div>
  );
}

export default Footer;
