import React from "react";
import { useParams } from "react-router-dom";
import { NavBar, Footer } from "../components";

const GameItem = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col justify-between bg-gray h-screen w-screen text-blue__text no-underline">
      <NavBar />
      <div className="flex flex-col">{id}</div>
      <div className="flex">asdasds</div>
      <Footer />
    </div>
  );
};

export default GameItem;
