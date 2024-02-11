import React, { useEffect, useRef } from "react";
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
import Image from "./SubContent/Image";
import AutoHeaderText from "./SubContent/AutoHeaderText";
import Learn from "./SubContent/Learn";
import { Howl, Howler } from "howler";
import kick from "../media/audio/background.wav";
import buttonSound from "../media/audio/scratchButtonLow.mp3";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

const backgroundMusicURL = kick;
const buttonSoundURL = buttonSound;


function HomeContent({ navClick }) {
 
  let backgroundMusic;

 


  const playBackgroundMusic = () => {
    backgroundMusic = new Howl({
      src: [backgroundMusicURL],
      volume: 0.2,
      loop: true, // Disable Howler.js loop feature
      // onend: function() {
      //   // When the audio ends, restart it immediately
      //   backgroundMusic.play();
      // },
    });
    backgroundMusic.play();
  };

  const buttonHover = () => {
    backgroundMusic = new Howl({
      src: [buttonSoundURL],
      volume: 0.1,
      loop: false, // Disable Howler.js loop feature
   
    });
    backgroundMusic.play();
  };

  return (
    <div id="main-content-container">
       <button onMouseEnter={playBackgroundMusic}>Play Background Music</button>
       <button onMouseEnter={buttonHover}>button</button>
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
        <ContactSubContent navSubClick={navClick} />
      </div>

      {/* Sub-Section Container Bottom */}
      <div id="subcontent-container-bottom" className="slide-up">
        {/* Sub-Section Video Component */}
        <Learn navSubClick={navClick} />
      </div>

      {/* Half Page Content Container */}
      <div id="half-page-container" className="slide-right">
        {/* Image Component */}
        <Image images={ImagePlaylist} navSubClick={navClick} />
      </div>
    </div>
  );
}

export default HomeContent;
