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
import AutoHeaderText from "./SubContent/AutoHeaderText";
import BottomText from "./SubContent/BottomText";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

function ContactPage({ navClick }) {
  return (
    <div id="main-content-container">
      {/* Header Text Container */}
      <div id="header-text-container" className="fade-in">
        {/* Auto Header Text Component */}
        <AutoHeaderText
          text="
          Contact ME! Go on! Go On!.
          "
          maxFont="3vh"
          minFont="15px"
          calFont="1.2vw"
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

      {/* Main image */}
      <div id="half-page-container">
        <div className="text-border right-margin-desktop">
          <img id="main-pic" src={test} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
