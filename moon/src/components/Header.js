import React, { useState } from "react";
import CustomBtn from "../styles/CustomButton.module.css";
import logo from "../media/images/ac01.png";
import style from "../styles/Header.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faCompass, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faBars, faCompass, faX);

const Header = ({ handleOnClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const menuButton = document.getElementById(style.menuButton);
    menuButton.style.display = isMenuOpen ? "flex" : "none";
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    const menuButton = document.getElementById(style.menuButton);
    menuButton.style.display = "block";
  };


  return (
    <div id="header">
      <div id="logo" className="header-element-left slide-left">
        {/* Logo */}
        <img
          type="button"
          onClick={() => handleOnClick("home")}
          id="logo-image"
          src={logo}
          alt=""
        />

      </div>

      {/* Mobile Dropdown menu */}
      <div id={style.navMobile} className="header-element-right">
        <div>
          <button
            onClick={toggleMenu}
            id={style.menuButton}
            className={CustomBtn.menuButton}
          >
            menu
          </button>

          {isMenuOpen && (
            <div id={style.dropDownItems}>
              <button
                onClick={() => {
                  handleOnClick("services");
                  handleNavClick();
                }}
                className={`slide-right ${CustomBtn.whiteMobile}`}
              >
                Services
              </button>

              <button
                onClick={() => {
                  handleOnClick("work");
                  handleNavClick();
                }}
                className={`slide-right ${CustomBtn.whiteMobile}`}
              >
                Portfolio
              </button>

              <button
                onClick={() => {
                  handleOnClick("about");
                  handleNavClick();
                }}
                className={`slide-right ${CustomBtn.whiteMobile}`}
              >
                About
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tablet & desktop menu */}
      <div id={style.navLarge} className="header-element-right">
        <button
          onClick={() => handleOnClick("services")}
          className={`slide-down ${CustomBtn.white}`}
        >
          Services
        </button>
        <button
          onClick={() => handleOnClick("work")}
          className={`slide-down ${CustomBtn.white}`}
        >
          Portfolio
        </button>
        <button
          onClick={() => handleOnClick("about")}
          className={`slide-right ${CustomBtn.white}`}
        >
          About
        </button>
      </div>
    </div>
  );
};

export default Header;
