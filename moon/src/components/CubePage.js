import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
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
import Cube from "./SubContent/Cube";


library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

function CubePage({ navClick }) {

  return (
    <div id="main-content-container">
      {/* Header Text Container*/}
      <div id="header-text-container" className="fade-in">
        {/* Auto Header Text Component */}
        <AutoHeaderText
          text="
          Here I am exploring 3D coding with HTML, CSS & JS. Spin the cube and display words.
          "
          maxFont="35px"
          minFont="15px"
          calFont="0.4"
          lineSpacing="1"
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
        <Learn navSubClick={navClick}/>
      </div>

      {/* Half Page Content Container */}
      <div id="half-page-container" className="slide-right">
        {/* Image Component */}
        <Cube />
      </div>
    </div>
  );
}

export default CubePage;
