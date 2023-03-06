import React from "react";

import { Slideshow, NavBar, Footer } from "../components";

const Home = () => {
  return (
    <div className="flex flex-col justify-between bg-gray h-screen w-screen text-blue__text no-underline">
      <NavBar />

      <div className="flex flex-col">
        <Slideshow />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
