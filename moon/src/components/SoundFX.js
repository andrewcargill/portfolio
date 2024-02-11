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
import { Howl, Howler } from "howler";
import outterbox1 from "../media/soundfx/kick1.wav";
import outterbox2 from "../media/soundfx/kick2.wav";
import box1 from "../media/soundfx/fx1.wav";
import box2 from "../media/soundfx/fx2.wav";
import box3 from "../media/soundfx/bass1.wav";
import box4 from "../media/soundfx/bass2.wav";

import css from "../styles/SoundFx.module.css";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);




function Soundfx({ navClick }) {
  const [sounds, setSounds] = useState([]);
  const [isMuted1, setIsMuted1] = useState(false);
  const [isMuted2, setIsMuted2] = useState(false);
  const [isMuted3, setIsMuted3] = useState(false);
  const [isMuted4, setIsMuted4] = useState(false);
  const [isMuted5, setIsMuted5] = useState(false);
  const [isMuted6, setIsMuted6] = useState(false);

  const toggleSounds = () => {
    if (sounds.length === 0) {
      const sound1 = new Howl({ src: [outterbox1], loop: true });
      const sound2 = new Howl({ src: [outterbox2], loop: true });
      const sound3 = new Howl({ src: [box1], loop: true });
      const sound4 = new Howl({ src: [box2], loop: true });
      const sound5 = new Howl({ src: [box3], loop: true });
      const sound6 = new Howl({ src: [box4], loop: true });

      sound1.play();
      sound2.play();
      sound3.play();
      sound4.play();
      sound5.play();
      sound6.play();

      setSounds([sound1, sound2, sound3, sound4, sound5, sound6]);
    } else {
      sounds.forEach(sound => sound.stop());
      setSounds([]);
    }
  };

  const toggleMuteSound1 = (mute) => {
    if (sounds.length > 0) {
      if (isMuted1 !== mute) {
        sounds[0].mute(mute);
        setIsMuted1(mute);
      }
    }
  };

  const toggleMuteSound2 = (mute) => {
    if (sounds.length > 0) {
      if (isMuted2 !== mute) {
        sounds[1].mute(mute);
        setIsMuted2(mute);
      }
    }
  };

  const toggleMuteSound3 = (mute) => {
    if (sounds.length > 0) {
      if (isMuted3 !== mute) {
        sounds[2].mute(mute);
        setIsMuted3(mute);
      }
    }
  };

  const toggleMuteSound4 = (mute) => {
    if (sounds.length > 0) {
      if (isMuted4 !== mute) {
        sounds[3].mute(mute);
        setIsMuted4(mute);
      }
    }
  };

  const toggleMuteSound5 = (mute) => {
    if (sounds.length > 0) {
      if (isMuted5 !== mute) {
        sounds[4].mute(mute);
        setIsMuted5(mute);
      }
    }
  };

  const toggleMuteSound6 = (mute) => {
    if (sounds.length > 0) {
      if (isMuted6 !== mute) {
        sounds[5].mute(mute);
        setIsMuted6(mute);
      }
    }
  };


  return (
    <div id="main-content-container">
      <button onClick={toggleSounds}>{sounds.length === 0 ? 'GO' : 'STOP'}</button>
      <div className={css.border}>
       
      {/* outterbox 1 */}
      <div 
      className={css.outterbox1}
      onMouseEnter={() => toggleMuteSound2(true)}
      onMouseLeave={() => toggleMuteSound2(false)}>
      
        <div 
          id={css.box1}
          className={css.box}
          onMouseEnter={() => toggleMuteSound3(true)}
          onMouseLeave={() => toggleMuteSound3(false)}>
          
        </div>
        <div 
          id={css.box2}
          className={css.box}
           onMouseEnter={() => toggleMuteSound4(true)}
           onMouseLeave={() => toggleMuteSound4(false)}>

        </div>
      </div>

      <div
          className={css.outterbox2}
          onMouseEnter={() => toggleMuteSound1(true)}
          onMouseLeave={() => toggleMuteSound1(false)}>

          <div 
            id={css.box3} 
            className={css.box}
            onMouseEnter={() => toggleMuteSound5(true)}
            onMouseLeave={() => toggleMuteSound5(false)}>
           

            </div>
          <div 
          id={css.box4} 
          className={css.box}
          onMouseEnter={() => toggleMuteSound6(true)}
          onMouseLeave={() => toggleMuteSound6(false)}>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Soundfx;
