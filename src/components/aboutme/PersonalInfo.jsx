import React from "react";

const PersonalInfo = () => {
  const infos = [
    {
      info: "Name",
      details: "Obi Chukwunonso Caleb",
    },
    {
      info: "Location",
      details: "Lagos,Nigeria",
    },
    {
      info: "Language",
      details: "English",
    },
  ];
  return (
    <div className="sm:p-[120px] sm:py-0 py-0 p-4 ">
      <h1 className="sm:text-[32px] text-2xl font-bold mb-8   ">
        Personal Information
      </h1>
      <div>
        {infos.map((info) => (
          <Highlight key={info.info} info={info} />
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;

const Highlight = ({ info }) => {
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between  sm:items-center items-start  border-b-2 border-[#888080] py-4">
      <h1 className="sm:text-xl text-lg font-bold  text-[#888080] ">
        {info.info}
      </h1>

      <p className="sm:text-xl text-lg font-semibold">{info.details}</p>
    </div>
  );
};
