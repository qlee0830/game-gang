import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { BiSearchAlt } from "react-icons/bi";

import profileIcon from "../images/profile.jpeg";
import logo from "../images/logo.jpeg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navItems = [
    ["Home", "/home"],
    ["Gangs", "/gangs"],
    ["Genres", "/genres"],
    ["Recruit", "/recruit"],
    ["About", "/about"],
  ].map(([title, url], id) => {
    return (
      <Link
        key={id}
        className="hover:bg-blue__text hover:text-black px-3 rounded-full"
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
    <div className="flex bg-black h-fit w-screen justify-between px-5 py-2 items-center relative">
      {/* 1. logo */}
      <div className="flex w-12 h-12">
        <img src={logo} alt="logo" />
      </div>

      {/* 2. menu */}
      {windowWidth <= 1100 ? (
        <div className="flex content-center">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
      ) : (
        <div className="flex gap-x-4 font-medium font-mono text-lg">
          {navItems}
        </div>
      )}

      {/* 2a. open menu on mobile view */}
      {isOpen && windowWidth <= 1100 && (
        <div className="flex flex-col bg-black absolute mt-44 ml-20">
          {navItems}
        </div>
      )}

      {/* 3. search  */}
      <div className="flex items-center relative">
        <input
          className="bg-gray p-1 mx-1 rounded-xl outline-0 focus:outline-blue__text"
          type="text"
          placeholder="Type anything..."
        />
        <BiSearchAlt className="absolute right-2" />
      </div>

      {/* 4. profile */}
      <div className="w-10 h-10">
        <img src={profileIcon} alt="profile icon" />
      </div>
    </div>
  );
};

export default NavBar;
