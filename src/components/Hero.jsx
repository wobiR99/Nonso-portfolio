import React from "react";
import { ping, profile } from "../assets";

const Hero = () => {
  return (
    <section className="flex sm:flex-row flex-col-reverse justify-center items-center gap-[57.5px] px-4 sm:px-[120px] pt-[31.5px] sm:pt-[60px] pb-[32px] sm:pb-[120px] ">
      <div className="flex flex-col justify-center gap-4 self-start sm:self-center w-full sm:w-auto">
        <h1 className="font-semibold sm:text-[40px] text-4xl    ">
          Obi Chukwunonso
        </h1>
        <aside className="flex flex-row justify-between w-full sm:justify-center sm:flex-col gap-[6px]">
          <div className="flex justify-start items-center gap-2">
            <img src={ping} className="h-4 w-4" />
            <p className="font-bold sm:text-base text-sm  ">
              Available for work
            </p>
          </div>
          <p className="font-normal text-sm sm:text-base text-[#888080] ">
            Based in Lagos, Nigeria
          </p>
        </aside>
      </div>

      <div>
        <img
          src={profile}
          className="sm:h-[440px] sm:w-[440px] h-[200px] w-[200px]"
        />
      </div>

      <h1 className="font-semibold sm:text-[40px] text-4xl   ">
        Creative Designer
      </h1>
    </section>
  );
};

export default Hero;
