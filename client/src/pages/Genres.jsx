import React from "react";
import { Link } from "react-router-dom";

import { NavBar, Footer } from "../components";

const Genres = () => {
  return (
    <div className="flex flex-col justify-between text-blue__text bg-gray h-screen w-screen">
      <NavBar />

      <div className="flex flex-col mx-52 bg-black rounded-3xl p-5">
        {/* 1. Browse Games horizontal menu */}
        <div className="flex flex-col">
          <h1 className="text-white text-center text-3xl my-10">
            Browse by Genres
          </h1>
          <div className="flex bg-gray justify-center rounded-3xl">
            {[
              ["Action", "/action"],
              ["Adventure", "/adventure"],
              ["Strategy", "/strategy"],
              ["Simulation", "/simulation"],
            ].map(([title, url], id) => {
              return (
                <Link
                  key={id}
                  className="hover:bg-blue__text hover:text-black p-1 m-2 rounded-xl"
                  to={url}
                >
                  {title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* 2. list of trending games */}
        <div className="flex bg-gray text-black my-5 p-5">
          {/* title, image, clansTotal, playersTotal (in thousands), topClanLogo, description */}
          {[
            [
              "Overwatch",
              "ow.img",
              10,
              100,
              "top-clan.jpg",
              "Overwatch 2 is a team-based multiplayer first-person shooter developed and published by Blizzard Entertainment.",
            ],
            [
              "Battlefield",
              "bf.img",
              22,
              80,
              "battle-g.jpg",
              "Battlefields changing before your eyes. A cutting-edge arsenal at your disposal. The grand return of all-out warfare. Adapt and overcome in massive-scale 128 player battles* where dynamic storms, environmental hazards, total combat freedom, and Battlefield's signature destruction spark a new breed of Only in Battlefield moments.",
            ],
            [
              "Minecraft",
              "raft-base.img",
              5,
              200,
              "top-survivors.jpg",
              "Minecraft is a game about placing blocks and going on adventures. Explore the official site for the latest news and the community's amazing creations!",
            ],
          ].map(
            (
              [
                title,
                image,
                clansTotal,
                playersTotal,
                topClanLogo,
                description,
              ],
              id
            ) => {
              return (
                <div className="flex flex-col bg-black w-fit h-fit text-white m-2 rounded-xl">
                  {/* let the game image to be background image */}

                  <div className="flex bg-gray justify-around m-4 p-2 rounded-xl items-center">
                    Clans:{""}
                    <p className="border-green border-2 rounded-full p-1 rounded-xl mr-5">
                      {clansTotal}
                    </p>
                    Players:{""}
                    <p className="border-green border-2 rounded-full p-1 rounded-xl">
                      {playersTotal}
                    </p>
                  </div>
                  <div className="flex flex-col m-2 text-white">
                    <p className="p-2 my-1 border-2 border-red rounded-xl text-center font-bold">
                      {title}
                    </p>
                    <p className="p-2 bg-white text-black">{description}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Genres;
