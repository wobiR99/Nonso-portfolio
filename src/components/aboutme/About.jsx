import React from "react";
import { download, profile } from "../../assets";

const About = () => {
  return (
    <div className="sm:p-[120px] sm:pt-[60px] pt-8 p-4 flex flex-col gap-8  sm:gap-[60px]">
      <h1 className="font-semibold text-center sm:text-left sm:text-[40px] text-4xl  ">
        Creative Designer
      </h1>
      <aside className="flex sm:flex-row flex-col justify-center items-center sm:gap-[148px] gap-[60px]">
        <img
          src={profile}
          className="sm:w-[270px] sm:h-[270px] w-[150px] h-[150px]"
        />
        <div className="flex flex-col gap-6">
          <p className="sm:text-2xl text-xl font-semibold ">
            Hey there, I’m Nonso
          </p>
          <p className="text-base font-normal">
            With two years of hands-on experience, I’m based in vibrant Lagos,
            Nigeria, where I ignited my passion for creating through my
            computer. Growing up in Africa shaped my unique perspective,
            allowing me to appreciate the beauty of diverse narratives and the
            power of fresh ideas. This journey fueled my desire to dive deeper
            into this field, leading me to further my learning and apply my
            skills in thrilling ways.
          </p>

          <a
            href="/RESUME.pdf"
            className="bg-black sm:self-start text-white font-semibold text-base flex gap-[10px] justify-center items-center px-8 py-[18px]"
            download
          >
            Download CV
            <img src={download} className="w-6 h-6" />
          </a>
        </div>
      </aside>
    </div>
  );
};

export default About;
