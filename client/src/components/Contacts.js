import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div>
      <p>Contact Us:</p>
      <p>
        Email:{" "}
        <Link to="/mail/admin@ggang.com" className="text-blue">
          admin@ggang.com
        </Link>
      </p>
      <p>
        Phone:{" "}
        <Link to="/phone" className="text-blue">
          +1 (206) 123 456
        </Link>
      </p>
      <p>
        Discord:{" "}
        <Link to="/discord/ggag123" className="text-blue">
          ggag123
        </Link>
      </p>
    </div>
  );
};

export default Contacts;
