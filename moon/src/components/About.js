import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ImagePlaylist from "../media/images/MainImagePlaylist";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowDown,
  faCheckSquare,
  faCoffee,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import ContactSubContent from "./SubContent/ContactSubContent";
import AutoHeaderText from "./SubContent/AutoHeaderText";
import Learn from "./SubContent/Learn";
import AboutContent from "./SubContent/AboutContent";


library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

function About({ navClick }) {

  return (
    <div id="main-content-container">
      {/* Header Text Container*/}
      <div id="header-text-container" className="fade-in">
        {/* Auto Header Text Component */}
        <AutoHeaderText
          text='
          “Great things are done by a series of small things brought together.” - Vincent Van Gogh
          '
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
      <div id="subcontent-container-bottom" className="">
        {/* Sub-Section Video Component */}
        <Learn navSubClick={navClick}/>
      </div>

      {/* Half Page Content Container */}
      <div id="half-page-container" className="fade-in">
        {/* Image Component */}
        <AboutContent images={ImagePlaylist} />
      </div>
    </div>
  );
}

export default About;
