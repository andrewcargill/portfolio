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
  const [inputText, setInputText] = useState("Autotext tracks the containers dimensions and sets the font size.");
  const [calFont, setCalFont] = useState(0.4);

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

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleCalFontChange = (e) => {    
    setCalFont(e.target.value);
  };


  return (
    <div id="main-content-container">
      {/* Header Text Container*/}
      <div id="header-text-container" className="fade-in">
        {/* Auto Header Text Component */}
        <AutoHeaderTextDemo
          text={inputText}
          maxFont="35px"
          minFont="15px"
          calFont={calFont}
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

          <div>
            <label htmlFor="textInput">Text: </label>
            <input
              type="text"
              id="textInput"
              value={inputText}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="calFont">Ratio: </label>
            <input
              type="number"
              id="calFont"
              value={calFont}
              onChange={handleCalFontChange}
            />
          </div>


          fontsize: {fontSize}

          containerHeight: {containerHeight}
          containerWidth: {containerWidth}

          {/* TEXT INPUT FIELD HERE */}


        </div>



      </div>
    </div>
  );
}

export default AutoTextPage;
