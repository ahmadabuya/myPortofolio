import React from "react";
import "./Navbar.css";
import Toogle from "../Toogle/Toogle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Abuy</div>
        <Toogle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Service</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Tech Stack</li>
            </Link>
            <Link spy={true} to="Testimonial" smooth={true}>
              <li>Portofolio</li>
            </Link>
            {/* <Link spy={true} to='Testimonial' smooth={true}>
                        
                    <li>Testimonial</li>
                    </Link> */}
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
