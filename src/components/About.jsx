import React from "react";
import { Link } from "react-router-dom";

const About = ({ setActive }) => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center px-4 sm:px-[120px]">
      <p className="font-normal text-2xl  sm:text-[40px]">
        As a freelance UI/UX, product, and website designer with over 2 years of
        experience, I take a thoughtful, user-focused approach to creating
        impactful designs for web and mobile products that make life easier and
        more exciting for people.
      </p>
      <Link
        to="aboutme"
        className="font-semibold text-base px-8 py-4 bg-[#181818] text-white w-full sm:w-auto text-center"
        onClick={() => setActive("aboutme")}
      >
        <button>Learn more</button>
      </Link>
    </div>
  );
};

export default About;
