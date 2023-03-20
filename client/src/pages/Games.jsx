import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { NavBar, Footer, Modal } from "../components";

const Games = () => {
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState(undefined);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: { "sort-by": "popularity" },
      headers: {
        "X-RapidAPI-Key": "3aa5f3b3b9mshc35f0da55255273p1d5be6jsnce84d8a4209c",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [list]);

  return (
    <div className="flex flex-col text-blue__text bg-gray w-screen">
      {showModal && (
        <Modal item={modalItem} onClose={() => setShowModal(false)} />
      )}

      <NavBar />

      <div className="flex flex-col p-5 content-center items-center">
        {/* 1. Browse Games horizontal menu */}
        <div className="flex flex-col">
          <h1 className="text-white text-center text-3xl mb-10">
            Browse by Genres
          </h1>
          <div className="flex bg-gradient-to-r from-sky to-indigo text-black w-screen justify-center">
            {[
              ["Action", "/action"],
              ["Adventure", "/adventure"],
              ["Strategy", "/strategy"],
              ["Simulation", "/simulation"],
            ].map(([title, url], id) => {
              return (
                <Link
                  key={id}
                  className="hover:bg-blue__bg active:bg-purple text-white py-3 px-2"
                  to={url}
                >
                  {title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* 2. list of trending games */}
        <div className="flex flex-wrap bg-gray text-black my-5 p-5 gap-x-8 gap-y-2">
          {/* title, image, clansTotal, playersTotal (in thousands), topClanLogo, description */}
          {list.map(
            (
              { id, title, short_description, platform, genre, thumbnail },
              key
            ) => {
              return (
                <div
                  key={key}
                  className="bg-black flex flex-col w-fit h-fit text-white rounded-xl items-center gap-y-2 p-2"
                >
                  {/* let the game image to be background image */}

                  <div className="w-full flex items-center justify-between p-2">
                    <p className="p-1 rounded-xl mr-5 w-fit">ID: {id}</p>
                    <p className="p-2 my-1 text-center font-bold italic">
                      {title}
                    </p>
                  </div>
                  <div className="flex flex-col items-center w-80">
                    <img src={thumbnail} alt="game img" />

                    <p className="h-16 w-full p-2 bg-white text-ellipsis text-black inline-block">
                      {short_description}
                    </p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <div className="flex flex-col content-center p-2">
                      <p>Platform: {platform}</p>
                      <p>Genre: {genre}</p>
                    </div>
                    <button
                      className="bg-gradient-to-r from-pink to-rose p-2 rounded-full"
                      onClick={() => {
                        setModalItem({
                          id,
                          title,
                          short_description,
                          platform,
                          genre,
                          thumbnail,
                        });
                        setShowModal(true);
                      }}
                    >
                      View
                    </button>
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

export default Games;
