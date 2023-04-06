import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import test from "../media/images/teach.jpeg";
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
import BottomText from "./SubContent/BottomText";
import AutoHeaderText from "./SubContent/AutoHeaderText";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

function Tutorials({ navClick }) {
  return (
    <div id="main-content-container">
      {/* Header Text Container*/}
      <div id="header-text-container" className="fade-in">
        {/* HeaderText */}
        <AutoHeaderText
          text="Wow. I love to teach! It's been a passion for over 20 years. It started in music education and now I'm
          starting up programming!"
          maxFont="3vh"
          minFont="15px"
          calFont="1.3vw"
        />
      </div>
      
      {/* Sub-Section Container Top */}
      <div id="subcontent-container-top" className="slide-left">
        {/* Contact Button Component */}
        <ContactSubContent
          navSubClick={navClick}
          text="I'm not genius.. But shout me anyway."
        />
      </div>

      {/* Sub-Section Container Bottom */}
      <div id="subcontent-container-bottom" className="slide-up">
        {/* Sub-Section Video Component */}
        <BottomText video={video} />
      </div>

      {/* Main image */}
      <div id="half-page-container">
        <div className="text-border right-margin-desktop">
          <img id="main-pic" src={test} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Tutorials;
