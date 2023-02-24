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
  { name: faDiscord, link: "/discord.com" },
  { name: faFacebook, link: "/facebook.com" },
  { name: faTelegram, link: "/telegram.com" },
  { name: faTiktok, link: "/tiktok.com" },
  { name: faTwitter, link: "/twitter.com" },
  { name: faTwitch, link: "/twitch.com" },
];

const SocialLinks = () => {
  return (
    <div>
      <Container>
        {platforms.map((platform) => {
          return (
            <Link className="mx-2" to={platform.link}>
              <FontAwesomeIcon className="w-7 h-7" icon={platform.name} />
            </Link>
          );
        })}
      </Container>
    </div>
  );
};

export default SocialLinks;
