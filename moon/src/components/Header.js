import React, { useState } from "react";
import CustomBtn from "../styles/CustomButton.module.css";
import logo from "../media/images/01_sqaure.png";
import style from "../styles/Header.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faCompass, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';

library.add(faBars, faCompass, faX);

const Header = ({ handleOnClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavClick = (page) => {
    setIsMenuOpen(false);
    navigate(page);
  }


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const menuButton = document.getElementById(style.menuButton);
    menuButton.style.display = isMenuOpen ? "flex" : "none";
  };

  // const handleNavClick = () => {
  //   setIsMenuOpen(false);
  //   const menuButton = document.getElementById(style.menuButton);
  //   menuButton.style.display = "block";
  // };


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
           
                  handleNavClick("/");
                }}
                id={CustomBtn.menuButtonHide}
                className={`slide-right ${CustomBtn.whiteMobile}`}
              >
                Services
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
          onClick={() => handleNavClick("/services")}
          id={CustomBtn.hidden}
          className={`slide-down ${CustomBtn.white}`}
        >
          Services
        </button>
        <button
          onClick={() => handleNavClick("/portfolio")}
          className={`slide-down ${CustomBtn.white}`}
        >
          Portfolio
        </button>
        <button
          onClick={() => handleNavClick("/about")}
          className={`slide-right ${CustomBtn.white}`}
        >
          About
        </button>
      </div>
    </div>
  );
};

export default Header;
