import React from "react";

import { NavBar, Footer } from "../components";

const About = () => {
  return (
    <div className="flex flex-col justify-between bg-gray h-screen w-screen text-blue__text no-underline">
      <NavBar />
      <div className="flex flex-col"></div>
      <Footer />
    </div>
  );
};

export default About;
