import React from "react";

import { NavBar, Footer } from "../components";

const Gangs = () => {
  return (
    <div className="flex flex-col justify-between text-blue__text bg-gray h-fit w-screen">
      <NavBar />

      <div className="flex flex-col items-center content-center mx-52 p-5 h-screen">
        {/* 1. filter gangs */}
        <div className="flex content-center items-center justify-between gap-x-4 gap-y-4">
          <div className="flex text-white bg-gray border-2 border-violet">
            <p className="bg-violet p-2">Gang Name:</p>
            <input
              className="bg-gray p-2 rounded-xl outline-0 focus:outline-blue__text"
              type="text"
              placeholder="Find your favorite gang..."
            />
          </div>
          <div className="flex text-white bg-gray border-2 border-violet">
            <p className="bg-violet p-2">Game:</p>
            <select
              className="bg-transparent border-none outline-0 text-center"
              name="game"
              id="game"
            >
              <option value="1">Action</option>
              <option value="2">Adventure</option>
              <option value="3">RPG</option>
              <option value="4">Strategy</option>
              <option value="5">Simulation</option>
            </select>
          </div>
          <button className="bg-emerald text-white p-2 rounded-xl">
            Find Gang
          </button>
        </div>

        {/* 2. display gangs */}
        <div className="flex bg-gradient-to-r from-sky to-indigo w-fit mt-10">
          {[
            ["Pirates", 1000],
            ["MPN", 500],
            ["Gangsteens", 100],
            ["Fate Gaming", 299],
          ].map(([name, members], id) => {
            return (
              <div
                key={id}
                className="text-black p-2 m-3 border-2 border-white h-auto w-auto"
              >
                <div className="text-xl italic text-center">{name}</div>
                <div className="text-base bg-white p-2">Members: {members}</div>
              </div>
            );
          })}
        </div>

        {/* 3. Pagination */}
      </div>

      <Footer />
    </div>
  );
};

export default Gangs;
