import React from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";
import Home from "../pages/Home";

import Works from "../pages/Works";
import GetInTouch from "../pages/GetInTouch";
import AboutMe from "../pages/AboutMe";

const AppRoute = ({ setActive }) => {
  return (
    <Routes>
      <Route index element={<Home setActive={setActive} />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route element={<Works />} path="/works" />
      <Route element={<GetInTouch />} path="/get-in-touch" />
    </Routes>
  );
};

export default AppRoute;
