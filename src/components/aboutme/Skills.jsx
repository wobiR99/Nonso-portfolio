import React from "react";
import { skills } from "../../constants";

const rate = [93, 91, 90, 92, 92];

const Skills = () => {
  return (
    <div className="flex flex-col gap-8 sm:p-[120px] p-4 pb-[60px]">
      <h3 className="sm:text-[32px] text-2xl  font-bold ">Skills</h3>
      <aside>
        {skills.map((skill) => (
          <Highlight key={skill.skill} skill={skill} />
        ))}
      </aside>
    </div>
  );
};

export default Skills;

const Highlight = ({ skill }) => {
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between  sm:items-center items-start  border-b-2 border-[#888080] py-4">
      <h1 className="sm:text-xl text-lg font-bold text-[#888080]  ">
        {skill.skill}
      </h1>

      <div className="sm:text-xl text-lg font-semibold bg-[#e8e8e8] w-full sm:w-[603px]">
        <div
          style={{
            width: `${skill.rate}%`,
          }}
          className="bg-black text-white flex  justify-between items-center p-4 font-normal"
        >
          <p>{skill.skill}</p>
          <p> {skill.rate}%</p>
        </div>
      </div>
    </div>
  );
};
