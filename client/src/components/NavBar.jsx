import React from "react";
import { Link } from "react-router-dom";

import profileIcon from "../images/profile.jpeg";

const menu = [
  { id: 1, name: "Home" },
  { id: 2, name: "About" },
  { id: 3, name: "Genres" },
  { id: 4, name: "Gangs" },
];

const NavBar = () => {
  return (
    <nav className="flex bg-black h-fit justify-between px-20 py-10 items-center">
      <div className="text-xl">LOGO</div>
      <ul className="flex justify-between font-medium font-mono text-lg">
        {menu.map((item) => {
          return (
            <li key={item.id} className="mx-5">
              <Link
                className="hover:text-gray"
                to={`/${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="">
        <input
          className="bg-gray p-1 rounded-xl outline-0 focus:outline-blue__text"
          type="text"
          placeholder="Type anything..."
        />
      </div>
      <div className="w-10 h-10">
        <img src={profileIcon} alt="profile icon" />
      </div>
    </nav>
  );
};

export default NavBar;
