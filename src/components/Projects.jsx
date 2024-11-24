import React from "react";
import { arrow } from "../assets";
import { liveProjects } from "../constants";

const Projects = () => {
  return (
    <section className="sm:p-[120px] py-[60px] px-4 flex flex-col gap-8">
      <div className="flex flex-col sm:justify-center sm:items-center">
        <h1 className="sm:text-2xl text-xl font-bold   ">
          Discover my creative expertise
        </h1>
        <p className="font-medium text-base  ">Check out some of my projects</p>
      </div>
      <div className="flex flex-col gap-8 justify-center">
        <div className="flex justify-between items-center">
          <h3 className="sm:text-[32px] text-2xl  font-bold ">Live Projects</h3>
          <button className="text-base px-8 py-4 bg-[#181818] text-white ">
            View all
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full">
          {liveProjects.map((liveProject) => (
            <ProjectCard key={liveProject.title} liveProject={liveProject} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

const ProjectCard = ({ liveProject }) => {
  return (
    <div className="flex flex-col sm:gap-[60px] gap-6 justify-center items-center">
      <img src={liveProject.image} className="" />
      <aside className="flex flex-col gap-8">
        <h4 className="sm:text-2xl text-xl font-semibold ">
          {liveProject.title}
        </h4>
        <p className="text-base sm:h-[114px] h-full sm:w-[584px] ">
          {liveProject.about}
        </p>

        <div className="flex flex-col gap-4">
          <p className="font-semibold text-base">
            Category:{" "}
            <span className="font-normal">{liveProject.category}</span>
          </p>
          <p className="font-semibold text-base">
            Role: <span className="font-normal">{liveProject.role}</span>
          </p>
          <p className="font-semibold text-base">
            Tag: <span className="font-normal">{liveProject.tag}</span>
          </p>
        </div>

        <button className="flex items-center sm:self-start  justify-center gap-2 py-[22px] px-8 border border-black">
          <p className="font-semibold text-base">Coming Soon</p>
          <img src={arrow} className="w-8 h-8" />
        </button>
      </aside>
    </div>
  );
};
