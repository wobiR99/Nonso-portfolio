import React from "react";
import { arrow } from "../assets";
import { finishedProjects } from "../constants";

const CaseStudies = () => {
  return (
    <section className="sm:px-[120px] sm:py-0 py-[60px] pt-0 px-4 flex flex-col gap-8">
      <div className="flex flex-col gap-8 justify-center">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="sm:text-[32px] text-2xl  font-bold ">
              Case Studies
            </h3>
            <button className="text-base px-8 py-4 bg-[#181818] text-white ">
              View all
            </button>
          </div>

          <p className="text-base sm:w-[697px] w-full ">
            I have worked on several live projects, including SaaS dashboards
            and mobile apps. While I can't publicly display these due to company
            policies, I'm happy to showcase them during a one-on-one call,
            directly through Figma. Feel free to schedule a call to discuss and
            view these works in detail
          </p>
        </div>

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
  );
};

export default CaseStudies;

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

        <a
          href={finishedProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center sm:self-start  justify-center gap-2 py-[22px] px-8 border border-black"
        >
          <p className="font-semibold text-base">Project Details</p>
          <img src={arrow} className="w-8 h-8" />
        </a>
      </aside>
    </div>
  );
};
