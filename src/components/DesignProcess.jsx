import React from "react";

const DesignProcess = () => {
  const processes = [
    {
      step: "STEP 1",
      action: "RESEARCH",
      method:
        "I Gather relevant data and context to understand the problem and our customers",
    },
    {
      step: "STEP 2",
      action: "PROBLEM DEFINITION",
      method:
        "After gaining more context, I take a step further to properly frame the problem.",
    },
    {
      step: "STEP 3",
      action: "USER JOURNEY MAPPING",
      method:
        "Before diving into design exploration, I always take the time to map out the user journey and stories.",
    },
    {
      step: "STEP 4",
      action: "DESIGN EXPLORATIONS",
      method:
        "I Explore various possible design solutions and seek feedback from relevant stakeholders and developers.",
    },
    {
      step: "STEP 5",
      action: "USABILITY TESTING",
      method:
        "After settling on some design directions, i conduct usability tests with users to assess ease of use.",
    },
    {
      step: "STEP 6",
      action: "HANDOFF AND MONITORING",
      method:
        "I Hand off all design-related assets to developers and monitor relevant performance metrics.",
    },
  ];

  return (
    <div className="sm:pt-[120px] pt-[60px] px-4 sm:px-[118px] pb-1 ">
      <h1 className="sm:text-[32px] text-2xl font-bold mb-8   ">
        My Design Process
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        {processes.map((process) => (
          <Card key={process.step} process={process} />
        ))}{" "}
      </div>
    </div>
  );
};

export default DesignProcess;

const Card = ({ process }) => {
  return (
    <div className="px-6 pt-6 pb-[68px] sm:pb-[61px] bg-[#F9F9F9] ">
      <h1 className="text-xl sm:text-2xl  font-semibold    ">{process.step}</h1>
      <h2 className=" text-lg  sm:text-xl font-semibold ">{process.action}</h2>
      <p className="font-normal text-base  ">{process.method}</p>
    </div>
  );
};
