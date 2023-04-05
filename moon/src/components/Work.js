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

import {
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactSubContent from "./SubContent/ContactSubContent";
import AutoHeaderText from "./SubContent/AutoHeaderText";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

function Work({ navClick }) {
    return(
          <div id="main-content"> 
          <AutoHeaderText text="
          WORK!
          "
          maxFont="7vh"
          minFont="30px"
          calFont="2vw"
          />

          {/* Action Section */}
          <ContactSubContent navSubClick={navClick} text="Let's start hanging out!" />
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

export default Work;
