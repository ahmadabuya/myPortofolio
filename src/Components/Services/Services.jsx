import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Ahmad Abuya CV.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Services = () => {
  const transition = { duration: 1, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Worked in various stages of front-end design and back-end
          <br></br>
          web development, from side projects,
          <br></br>
          design and product development.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Dowload CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "33rem" }}
          whileInView={{ left: "26rem" }}
          transition={transition}
          style={{ left: "26rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Coreldraw, Photoshop "}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-2rem" }}
          whileInView={{ left: "6rem" }}
          transition={transition}
          style={{ top: "12rem", left: "6rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Frontend Developer"}
            detail={"Html, Css, JavaScript, React "}
          />
        </motion.div>
        {/* 3 card */}
        <motion.div
          initial={{ left: "32rem" }}
          whileInView={{ left: "24rem" }}
          transition={transition}
          style={{ top: "19rem", left: "24rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Backend Developer"}
            detail={"Nodejs, MySQL, Rest API "}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
