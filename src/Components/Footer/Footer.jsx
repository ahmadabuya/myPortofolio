import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>ahmadabuya0@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/ahmad_abuya?igsh=MWc0czM4YzZoNHA1bg=="
            target="_blank"
            rel="noreferrer"
          >
            <Insta color="white" size="3rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-abuya/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin color="white" size="3rem" />
          </a>
          <a
            href="https://www.instagram.com/ahmad_abuya?igsh=MWc0czM4YzZoNHA1bg=="
            target="_blank"
            rel="noreferrer"
          >
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
