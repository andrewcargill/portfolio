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
  const [isMuted, setIsMuted] = useState(false);

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

  const toggleMuteSound2 = (mute) => {
    if (sounds.length > 0) {
      if (isMuted !== mute) {
        sounds[1].mute(mute);
        setIsMuted(mute);
      }
    }
  };


  return (
    <div id="main-content-container">
      <button onClick={toggleSounds}>{sounds.length === 0 ? 'STOP' : 'START'}</button>
      <div className={css.border}>
       
      {/* outterbox 1 */}
      <div 
      className={css.outterbox1}
      onMouseEnter={() => toggleMuteSound2(true)}
      onMouseLeave={() => toggleMuteSound2(false)}>
      
        <div 
          id={css.box1}
          className={css.box}>
        </div>
        <div 
          id={css.box2}
          className={css.box}>
        </div>
      </div>

      <div className={css.outterbox2}>
        <div 
          id={css.box3}
          className={css.box}>
        </div>
        <div 
          id={css.box4}
          className={css.box}>
        </div>
      </div>

      </div>

    </div>
  );
}

export default Soundfx;
