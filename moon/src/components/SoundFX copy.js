import React, { useState } from "react";
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
import { Howl, Howler } from "howler";
import midSound from "../media/audio/buttonMid.mp3";
import kick from "../media/audio/background.wav";
import buttonSound from "../media/audio/buttonGlitch1.mp3";
import css from "../styles/SoundFx.module.css";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

const backgroundMusicURL = kick;
const buttonSoundURL = buttonSound;
const midSoundURL = midSound;


function Soundfx({ navClick }) {

  const [boxAudio, setBoxAudio] = useState(null);
 
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

  const playMidSound = () => {
    const sound = new Howl({
      src: [midSoundURL],
      volume: 0.1,
      loop: true,
    });
    sound.play();
    setBoxAudio(sound);
  };

  const stopMidSound = () => {
    if (boxAudio) {
      boxAudio.stop();
      setBoxAudio(null);
    }
  };


  return (
    <div id="main-content-container">
      <div 
        onMouseOver={playMidSound} 
        onMouseLeave={stopMidSound}
        className={css.box}></div>
      <button onClick={playBackgroundMusic}>Play Background Music</button>
      <button onMouseOver={buttonHover}>Button Hover</button>
      <h2>SoundFX</h2>
    </div>
  );
}

export default Soundfx;
