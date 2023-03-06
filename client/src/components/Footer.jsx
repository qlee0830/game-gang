import React from "react";

import Contacts from "./Contacts";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="flex h-fit w-screen px-20 py-10 justify-between bg-black items-center">
      <div className="flex">
        <SocialLinks />
      </div>
      <div className="flex flex-col">
        <Contacts />
      </div>
    </div>
  );
};

export default Footer;
