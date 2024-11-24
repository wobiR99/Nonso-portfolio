import React from "react";
import { medal } from "../../assets";

const Recognition = () => {
  const infos = [
    {
      info: "PANS 1ST CONVENTIONAL HACKATHON, UNIVERSITY OF LAGOS",
      details: "Team Stocmed",
      position: "1st Runner-up",
    },
  ];
  return (
    <div className="sm:p-[120px] sm:pt-[120px] pt-[60px] sm:pb-0 pb-0 p-4 ">
      <h1 className="sm:text-[32px] text-2xl font-bold mb-8   ">Recognition</h1>
      <div>
        {infos.map((info) => (
          <Highlight key={info.info} info={info} />
        ))}
      </div>
    </div>
  );
};

export default Recognition;

const Highlight = ({ info }) => {
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between  sm:items-center items-start  border-b-2 border-black py-4">
      <aside className="flex flex-col gap-2">
        <h1 className="sm:text-xl text-lg font-bold  ">{info.info}</h1>
        <p className="text-base font-normal">{info.details}</p>
      </aside>

      <p className="sm:text-xl text-lg font-semibold flex justify-center items-center">
        <img src={medal} className="w-[15px] h-[21px]" />
        {info.position}
      </p>
    </div>
  );
};
