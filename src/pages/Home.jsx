import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import DesignProcess from "../components/DesignProcess";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import CaseStudies from "../components/CaseStudies";

const Home = ({ setActive }) => {
  return (
    <div className="remove-scrollbar">
      <Hero />
      <About setActive={setActive} />
      <DesignProcess />
      <Projects />
      <CaseStudies />
      <Experience />
    </div>
  );
};

export default Home;
