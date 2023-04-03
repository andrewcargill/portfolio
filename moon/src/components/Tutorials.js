import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import test from "../media/images/teach.jpeg";
import CustomBtn from "../styles/CustomButton.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import video from "../media/video/advert.mp4";
import {
  faArrowDown,
  faCheckSquare,
  faCoffee,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import {
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactSubContent from "./SubContent/ContactSubContent";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

function Tutorials({ navClick }) {
    return(
         <div id="main-content">
          <div id="header-text">
            <div className="content-no-background left-margin-desktop">
              At the moment I'm working with Umeå Kommun in teaching students how to 
              work with the main building blocks of coding! HTML, CSS and JS. <FontAwesomeIcon icon="arrow-down" />{" "}
              <FontAwesomeIcon icon="arrow-down" />{" "}
              <FontAwesomeIcon icon="arrow-down" />
            </div>
          </div>
          {/* Action Section */}
          <ContactSubContent navSubClick={navClick} />
          {/* Sub info - Video */}
          <div id="bottom-text">
            <div
              id="bottom-text-content"
              className="text-border-white left-margin-desktop"
            >
              <video src={video} autoPlay muted loop />
            </div>
          </div>
          {/* Main image */}
          <div id="image">
            <div className="text-border right-margin-desktop">
              <img id="main-pic" src={test} alt="Logo" />
            </div>
          </div>
        </div>
    );
}

export default Tutorials;
