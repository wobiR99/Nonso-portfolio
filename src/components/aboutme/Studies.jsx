import React from "react";

const Studies = () => {
  const infos = [
    {
      info: "Pharmacy",
      details: "University of Lagos",
      time: "2020 - Present",
    },
  ];
  return (
    <div className="sm:p-[120px] sm:py-0 py-0 p-4 ">
      <h1 className="sm:text-[32px] text-2xl font-bold mb-8   ">Studies</h1>
      <div>
        {infos.map((info) => (
          <Highlight key={info.info} info={info} />
        ))}
      </div>
    </div>
  );
};

export default Studies;

const Highlight = ({ info }) => {
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between  sm:items-center items-start  border-b-2 border-black py-4">
      <aside className="flex flex-col gap-2">
        <h1 className="sm:text-xl text-lg font-bold  ">{info.info}</h1>
        <p className="text-base font-normal">{info.details}</p>
      </aside>

      <p className="sm:text-xl text-lg font-semibold">{info.time}</p>
    </div>
  );
};
