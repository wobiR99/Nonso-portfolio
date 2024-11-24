import React from "react";
import About from "../components/aboutme/About";
import PersonalInfo from "../components/aboutme/PersonalInfo";
import Skills from "../components/aboutme/Skills";
import Studies from "../components/aboutme/Studies";
import Recognition from "../components/aboutme/Recognition";
import Experience from "../components/Experience";

const AboutMe = () => {
  return (
    <div>
      <About />
      <PersonalInfo />
      <Skills />
      <Studies />
      <Recognition />
      <Experience />
    </div>
  );
};

export default AboutMe;
