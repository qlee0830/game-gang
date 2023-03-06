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

const platforms = [
  [faDiscord, "/discord.com"],
  [faFacebook, "/facebook.com"],
  [faTelegram, "/telegram.com"],
  [faTiktok, "/tiktok.com"],
  [faTwitter, "/twitter.com"],
  [faTwitch, "/twitch.com"],
];

const SocialLinks = () => {
  return (
    <div>
      <Container>
        {platforms.map(([icon, url], id) => {
          return (
            <Link key={id} className="mx-2" to={url}>
              <FontAwesomeIcon className="w-7 h-7" icon={icon} />
            </Link>
          );
        })}
      </Container>
    </div>
  );
};

export default SocialLinks;
