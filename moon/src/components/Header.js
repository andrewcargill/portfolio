import React, { useState } from "react";
import CustomBtn from "../styles/CustomButton.module.css";
import logo from "../media/images/flodhus.png";
import style from "../styles/Header.module.css";

const Header = ({ handleOnClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const menuButton = document.getElementById(style.menuButton);
  menuButton.style.display = isMenuOpen ? 'flex' : 'none';
    
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
            Menu
          </button>
          
          {isMenuOpen && (
            <div id={style.dropDownItems}>
              <button
                onClick={() => handleOnClick("services")}
                className={`slide-right ${CustomBtn.whiteMobile}`}
              >
                Services
              </button>

              <button
                onClick={() => handleOnClick("work")}
                className={`slide-right ${CustomBtn.whiteMobile}`}
              >
                Portfolio
              </button>

              <button
                onClick={() => handleOnClick("about")}
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
