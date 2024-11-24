import React from "react";
import { experiences } from "../constants";

const Experience = () => {
  return (
    <div className="flex flex-col gap-8 sm:p-[120px] p-4 pb-[60px]">
      <h3 className="sm:text-[32px] text-2xl  font-bold ">Experience</h3>
      <aside>
        {experiences.map((experience) => (
          <Highlight key={experience.timeline} experience={experience} />
        ))}
      </aside>
    </div>
  );
};

export default Experience;

const Highlight = ({ experience }) => {
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between  sm:items-center items-start  border-b-2 border-black py-4">
      <aside className="flex flex-col gap-2">
        <h1 className="sm:text-xl text-lg font-bold  ">{experience.role}</h1>
        <p className="text-base font-normal">{experience.company}</p>
      </aside>

      <p className="sm:text-xl text-lg font-semibold">{experience.timeline}</p>
    </div>
  );
};
