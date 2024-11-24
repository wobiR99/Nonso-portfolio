import React from "react";
import Projects from "../components/Projects";
import CaseStudies from "../components/CaseStudies";
import { finishedProjects, liveProjects } from "../constants";
import { arrow } from "../assets";

const Works = () => {
  return (
    <>
      <section className="sm:p-[120px] py-[60px] px-4 flex flex-col gap-8">
        <div className="flex flex-col gap-8 justify-center">
          <h3 className="sm:text-[32px] text-2xl  font-medium flex flex-col gap-2 ">
            Take a look at my{" "}
            <span className="font-medium">
              latest <span className="font-bold">Live Projects</span>
            </span>
          </h3>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full">
            {liveProjects.map((liveProject) => (
              <ProjectCard
                key={liveProject.title}
                finishedProject={liveProject}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="sm:p-[120px] sm:pt-0 pb-[60px] pt-0 px-4 flex flex-col gap-8">
        <div className="flex flex-col gap-8 justify-center">
          <h3 className="sm:text-[32px] text-2xl  font-medium flex flex-col gap-2 ">
            Take a look at my{" "}
            <span className="font-medium">
              latest <span className="font-bold">Personal Projects</span>
            </span>
          </h3>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full">
            {finishedProjects.map((finishedProject) => (
              <ProjectCard
                key={finishedProject.title}
                finishedProject={finishedProject}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;

const ProjectCard = ({ finishedProject }) => {
  return (
    <div className="flex flex-col sm:gap-[60px] gap-6 justify-center items-center w-full">
      <img src={finishedProject.image} className="" />
      <aside className="flex flex-col gap-8">
        <h4 className="sm:text-2xl text-xl font-semibold ">
          {finishedProject.title}
        </h4>
        <p className="text-base sm:h-[114px] h-full  sm:w-[584px] ">
          {finishedProject.about}
        </p>

        <div className="flex flex-col gap-4">
          <p className="font-semibold text-base">
            Category:{" "}
            <span className="font-normal">{finishedProject.category}</span>
          </p>
          <p className="font-semibold text-base">
            Role: <span className="font-normal">{finishedProject.role}</span>
          </p>
          <p className="font-semibold text-base">
            Tag: <span className="font-normal">{finishedProject.tag}</span>
          </p>
        </div>

        {finishedProject.link ? (
          <a
            href={finishedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center sm:self-start  justify-center gap-2 py-[22px] px-8 border border-black"
          >
            <p className="font-semibold text-base">Project Details</p>
            <img src={arrow} className="w-8 h-8" />
          </a>
        ) : (
          <button className="flex items-center sm:self-start  justify-center gap-2 py-[22px] px-8 border border-black">
            <p className="font-semibold text-base">Coming Soon</p>
            <img src={arrow} className="w-8 h-8" />
          </button>
        )}
      </aside>
    </div>
  );
};
