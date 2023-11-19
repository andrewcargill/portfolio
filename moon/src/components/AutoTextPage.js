import React, { useState } from "react";
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
import Learn from "./SubContent/Learn";
import css from "../styles/AutoTextPage.module.css"
import AutoHeaderTextDemo from "./SubContent/AutoHeaderTextDemo";



library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

function AutoTextPage({ navClick }) {

  const [fontSize, setFontSize] = useState(1.8);
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const handleFontSizeChange = (newFontSize) => {
    const roundedFontSize = parseFloat(newFontSize.toFixed(4));
    setFontSize(roundedFontSize);
  };

  const handleContainerHeightChange = (newContainerHeight) => {
    setContainerHeight(newContainerHeight);
  };

  const handleContainerWidthChange = (newContainerWidth) => {
    setContainerWidth(newContainerWidth);
  };

  return (
    <div id="main-content-container">
      {/* Header Text Container*/}
      <div id="header-text-container" className="fade-in">
        {/* Auto Header Text Component */}
        <AutoHeaderTextDemo
          text="
          Version one of a drum machine! Written in Javascript and using 'Howler'
          for sound sync.
          "
          maxFont="35px"
          minFont="15px"
          calFont="0.4"
          lineSpacing="1"
          onFontSizeChange={handleFontSizeChange}
          onContainerHeightChange={handleContainerHeightChange}
          onContainerWidthChange={handleContainerWidthChange}

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
        <Learn navSubClick={navClick} />
      </div>

      {/* Half Page Content Container */}
      <div id="half-page-container-size-to-content" className="slide-right">
        {/* Image Component */}
        <div id={css.comingSoon} className="text-border right-margin-desktop image-container">

          AutoText Demo


          fontsize: {fontSize}


          containerHeight: {containerHeight}
          containerWidth: {containerWidth}


        </div>



      </div>
    </div>
  );
}

export default AutoTextPage;
