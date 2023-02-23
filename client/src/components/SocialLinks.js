import React from "react";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faTelegram,
  faTiktok,
  faTwitter,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <div>
      <Container>
        <Link to="/discord.com">
          <FontAwesomeIcon icon={faDiscord} />
        </Link>
        <Link to="/facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link to="/twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link to="/telegram.com">
          <FontAwesomeIcon icon={faTelegram} />
        </Link>
        <Link to="/tiktok.com">
          <FontAwesomeIcon icon={faTiktok} />
        </Link>
        <Link to="/twitch.com">
          <FontAwesomeIcon icon={faTwitch} />
        </Link>
      </Container>
    </div>
  );
};

export default SocialLinks;
