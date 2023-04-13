import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import test from "../media/images/false.png";
import CustomBtn from "../styles/CustomButton.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import video from "../media/video/advert.mp4";
import {
  faArrowDown,
  faCheckSquare,
  faCoffee,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { faCodepen } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactSubContent from "./SubContent/ContactSubContent";
import HeaderText from "./SubContent/HeaderText";
import AutoHeaderText from "./SubContent/AutoHeaderText";
import BottomText from "./SubContent/BottomText";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

function sayHello() {
  alert("You clicked me!");
}

function About({ navClick }) {
  return (
    <div id="main-content-container">
      {/* Header Text Container*/}
      <div id="header-text-container" className="fade-in">
        <AutoHeaderText
          text="
          I've owned a few companies over the years; The first was a music production 
          company in the UK and the present is a farm and tech company in the North of Sweden. Oh how the years take you on adventures!
          "
          maxFont="4vh"
          minFont="15px"
          calFont="1vw"
        />
      </div>

      {/* Sub-Section Container Top */}
      <div id="subcontent-container-top" className="slide-left">
        {/* Contact Button Component */}
        <ContactSubContent
          navSubClick={navClick}
          text="Looking for some tuition or a new website?"
        />
      </div>
      {/* Sub-Section Container Bottom */}
      <div id="subcontent-container-bottom" className="slide-up">
        {/* Sub-Section Video Component */}
        <BottomText video={video} />
      </div>

      {/* Half Page Content Container */}

      <div id="half-page-container">
        <div className="text-border right-margin-desktop">
          <img id="main-pic" src={test} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default About;
