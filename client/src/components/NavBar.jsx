import React from "react";
import { Link } from "react-router-dom";

import profileIcon from "../images/profile.jpeg";

const NavBar = () => {
  return (
    <nav className="flex bg-black h-fit justify-between px-20 py-10 items-center">
      <div className="text-xl">LOGO</div>
      <ul className="flex justify-between">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/genres">Genres</Link>
        </li>
        <li>
          <Link to="/gangs">Gangs</Link>
        </li>
      </ul>
      <div>search box</div>
      <div className="w-10 h-10">
        <img src={profileIcon} alt="profile icon" />
      </div>
    </nav>
  );
};

export default NavBar;
