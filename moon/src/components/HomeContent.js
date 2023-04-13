import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ImagePlaylist from "../media/images/MainImagePlaylist";
import { library } from "@fortawesome/fontawesome-svg-core";
import video from "../media/video/advert.mp4";
import {
  faArrowDown,
  faCheckSquare,
  faCoffee,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import ContactSubContent from "./SubContent/ContactSubContent";
import Image from "./SubContent/Image";
import AutoHeaderText from "./SubContent/AutoHeaderText";
import HowCanIHelp from "./SubContent/HowCanIHelp";


library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

function HomeContent({ navClick }) {

  return (
    <div id="main-content-container">
      {/* Header Text Container*/}
      <div id="header-text-container" className="fade-in">
        {/* Auto Header Text Component */}
        <AutoHeaderText
          text="
          Welcome to my world where creativity and full stack engineering collide.
          "
          maxFont="35px"
          minFont="15px"
          calFont="0.4"
          lineSpacing="1"
          // calFont="1.2vh"
        />
      </div>

      {/* Sub-Section Container Top */}
      <div id="subcontent-container-top" className="slide-left">
        {/* Contact Button Component */}
        <ContactSubContent
          navSubClick={navClick}
          text="Coding, Audio, UX Design... Give me a call!"
        />
      </div>

      {/* Sub-Section Container Bottom */}
      <div id="subcontent-container-bottom" className="slide-up">
        {/* Sub-Section Video Component */}
        <HowCanIHelp />
      </div>

      {/* Half Page Content Container */}
      <div id="half-page-container" className="slide-right">
        {/* Image Component */}
        <Image images={ImagePlaylist} />
      </div>
    </div>
  );
}

export default HomeContent;
