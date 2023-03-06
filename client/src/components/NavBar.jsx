import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

import profileIcon from "../images/profile.jpeg";
import logo from "../images/logo.jpeg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navItems = [
    ["Home", "/home"],
    ["About", "/about"],
    ["Genres", "/genres"],
    ["Gangs", "/gangs"],
  ].map(([title, url], id) => {
    return (
      <Link
        key={id}
        className="hover:bg-blue__text hover:text-black px-5"
        to={url}
      >
        {title}
      </Link>
    );
  });

  useEffect(() => {
    const handleWidthResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWidthResize);

    return () => {
      window.removeEventListener("resize", handleWidthResize);
    };
  }, []);

  return (
    <div className="flex bg-black h-fit w-screen justify-between px-20 py-10 items-center relative">
      <div className="flex w-12 h-12">
        <img src={logo} alt="logo" />
      </div>

      {windowWidth <= 1100 ? (
        <div className="flex flex-col">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
          {isOpen ? (
            <div className="flex flex-col bg-white absolute ml-20">
              {navItems}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="flex font-medium font-mono text-lg">{navItems}</div>
      )}

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
    </div>
  );
};

export default NavBar;
