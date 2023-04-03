import React from "react";
import CustomBtn from "../styles/CustomButton.module.css";
import logo from "../media/images/flodhus.png";

const Header = ({ handleOnClick }) => {
  return (
    <div id="header">
      <div id="logo" className="header-element1 slide-left">
        <img
          type="button"
          onClick={() => handleOnClick("home")}
          id="logo-image"
          src={logo}
          alt=""
        />
      </div>
      <div id="nav" className="header-element-right">
        <button
          onClick={() => handleOnClick("tuition")}
          className={`slide-down ${CustomBtn.white}`}
        >
          Tutorials
        </button>
        <button
          onClick={() => handleOnClick("work")}
          className={`slide-down ${CustomBtn.white}`}
        >
          Work
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
