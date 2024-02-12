import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowDown,
  faCheckSquare,
  faCoffee,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { Howl, Howler } from "howler";
import drum from "../../media/soundfx/kick2.wav";
import bass from "../../media/soundfx/bass2.wav";
import css from "../../styles/SoundFxExperiments.module.css";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

const drumURL = drum;
const bassURL = bass;

function SoundfxTone({ navClick }) {

  return (
    <div id="main-content-container">
      <div 
     
        className={css.box}></div>
      <button >Play Music</button>
      <button>Button Hover</button>
      <div class="slidecontainer">
      <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
</div>
  
    </div>
  );
}

export default SoundfxTone;
