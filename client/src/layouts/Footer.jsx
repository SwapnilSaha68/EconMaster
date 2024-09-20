import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2]">
      <div className="container mx-auto px-4 py-5 md:px-12 lg:py-18 grid grid-cols-3 gap-y-5 lg:grid-cols-4 gap-x-4">


        <div>
          <h4 className="uppercase font-bold text-lg text-palette-chineseBlack mb-4">
            Follow us
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-2 text-palette-graniteGray font-normal">
            <a className="inline-block" href="/">
              Facebook
            </a>
            <a className="inline-block" href="/">
              Instagram
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
