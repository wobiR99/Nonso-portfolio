import React from "react";
import { behance, x } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-black sm:p-[120px] p-4">
      <div className="flex flex-col items-center justify-center gap-8 py-[120px] border border-white">
        <p className="font-semibold sm:text-[32px] text-2xl text-[#888080] ">
          Looking for a new talent?
        </p>
        <h2 className="sm:text-[64px] text-[32px] text-white  ">
          nonsoobi17@gmail.com
        </h2>
        <small className="font-semibold sm:text-[32px] text-2xl text-white">
          +234 8165 9057 69
        </small>
      </div>

      <div className="flex justify-between mt-6">
        <p className="font-semibold text-sm sm:text-base text-white ">
          ©2024 OBI C.
        </p>
        <p className="flex gap-6">
          <a
            href="https://www.behance.net/nonsoobi1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={behance} className="w-[38px] h-6" />
          </a>
          <a
            href="https://x.com/calebslegacy?s=21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={x} className="w-6 h-6" />
          </a>
        </p>
        <p className="font-semibold text-sm sm:text-base text-white ">
          Made by Obi C.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
