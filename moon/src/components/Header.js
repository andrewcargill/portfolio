import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import CustomBtn from "../styles/CustomButton.module.css";
import logo from "../media/images/01_sqaure.png";
import style from "../styles/Header.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faCompass, faX } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faCompass, faX);

const Header = ({ handleOnClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleNavClick = (page) => {
    setIsMenuOpen(false);
    navigate(page);
    const menuButton = document.getElementById(style.menuButton);
    menuButton.style.display = "block";

  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const menuButton = document.getElementById(style.menuButton);
    menuButton.style.display = isMenuOpen ? "flex" : "none";
  };

  return (
    <div id="header">
      <div id="logo" className="header-element-left slide-left">
        {/* Logo */}
        <img
          type="button"
          onClick={() => handleNavClick("/")}
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

                  handleNavClick("/drum");
                }}
                // id={CustomBtn.menuButtonHide}
                className={`slide-right ${CustomBtn.whiteMobile}`}
              >
                dr-01
              </button>

              <button
                onClick={() => {

                  handleNavClick("/portfolio");
                }}
                className={`slide-right ${CustomBtn.whiteMobile}`}
              >
                Portfolio
              </button>

              <button
                onClick={() => {

                  handleNavClick("/about");
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
          onClick={() => handleNavClick("/drum")}
          // id={CustomBtn.hidden}
          className={`slide-down ${CustomBtn.white} ${isActive('/drum') ? CustomBtn.whiteActive : '' }`}
        >
          dr-01
        </button>
        <button
          onClick={() => handleNavClick("/portfolio")}
          className={`slide-down ${CustomBtn.white} ${isActive('/portfolio') ? CustomBtn.whiteActive : '' }`}
        >
          Portfolio
        </button>
        <button
          onClick={() => handleNavClick("/about")}
          className={`slide-right ${CustomBtn.white} ${isActive('/about') ? CustomBtn.whiteActive : '' }`}
        >
          About
        </button>
      </div>
    </div>
  );
};

export default Header;
