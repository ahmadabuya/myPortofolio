import React from "react";
import "./Works.css";
import Upwork from "../../img/nodejs.png";
import Fiverr from "../../img/logohcs.jpg";
import Amazon from "../../img/postmant.png";
import Shopify from "../../img/mysql.png";
import Facebook from "../../img/react.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  const transition = { duration: 3.5, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="Works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Tecknology</span>
        <span>Used</span>
        <span>
          The technology used is very flexible and of course the best in terms
          of web development
        </span>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button s-button">Hire me</button>
        </Link>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={transition}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
