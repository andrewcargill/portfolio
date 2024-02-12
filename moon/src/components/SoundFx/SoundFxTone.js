import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown, faCheckSquare, faCoffee, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { Player, start, getContext, rampTo } from "tone";
import drum from "../../media/soundfx/kick2.wav";
import bass from "../../media/soundfx/bass2.wav";
import css from "../../styles/SoundFxExperiments.module.css";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

const drumURL = drum;
const bassURL = bass;

function SoundfxTone({ navClick }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [drumPlayer, setDrumPlayer] = useState(null);
  const [bassPlayer, setBassPlayer] = useState(null);

  useEffect(() => {
    // Ensure that Tone.js context is started after a user action
    document.addEventListener("click", () => {
      if (getContext().state !== "running") {
        start();
      }
    }, { once: true });

    // Load the audio files
    const loadAudio = async () => {
      const drumPlayer = new Player().toDestination();
      const bassPlayer = new Player().toDestination();

      // Load the drum audio file
      await drumPlayer.load(drumURL);
      // Load the bass audio file
      await bassPlayer.load(bassURL);

      // Set player states
      setDrumPlayer(drumPlayer);
      setBassPlayer(bassPlayer);
    };

    loadAudio();
  }, []);

  const togglePlayback = () => {
    if (!isPlaying) {
      // Start playing the drum and bass sounds
      drumPlayer.loop = true;
      bassPlayer.loop = true;
      drumPlayer.start();
      drumPlayer.volume.value = -Infinity;
      bassPlayer.start();
      bassPlayer.volume.value = -Infinity;

      setIsPlaying(true);
    } else {
      // Stop playing the sounds
      drumPlayer.stop();
      bassPlayer.stop();

      setIsPlaying(false);
    }
  };

  const muteDrums = (mute) => {
    if (drumPlayer) {
      if (mute) {
        drumPlayer.volume.rampTo(-Infinity, 0.25);
        bassPlayer.volume.rampTo(0, 0.25); 
      } else {
        bassPlayer.volume.rampTo(-Infinity, 0.25);
        drumPlayer.volume.rampTo(0, 0.25); 
      }
    }
  };

  const muteBass = (mute) => {
    if (bassPlayer) {
      if (mute) {
        bassPlayer.volume.rampTo(-Infinity, 0.25);
        drumPlayer.volume.rampTo(0, 0.25); 
      } else {
        drumPlayer.volume.rampTo(-Infinity, 0.25);
        bassPlayer.volume.rampTo(0, 0.25); 
      }
      
    }
  };

  const unmuteAll = () => {
    if (drumPlayer) {
      drumPlayer.volume.rampTo(0, 0.5); // Unmute drums
    }
    if (bassPlayer) {
      bassPlayer.volume.rampTo(0, 0.3); // Unmute bass
    }
  };

  const muteAll = () => {
    drumPlayer.volume.rampTo(-Infinity, 0.3);
    bassPlayer.volume.rampTo(-Infinity, 0.3);
  
  };

  return (
    <div id="main-content-container">
      <div className={css.box}></div>
      <button onClick={togglePlayback}>{isPlaying ? "Stop Music" : "Play Music"}</button>
      <button
        onMouseEnter={() => muteDrums(true)}
        onMouseLeave={() => muteAll()}
      >
        Mute Drums on hover
      </button>
      <button
        onMouseEnter={() => muteBass(true)}
        onMouseLeave={() => muteAll()}
      >
        Mute Bass on hover
      </button>
      <button
        onMouseEnter={unmuteAll}
        onMouseLeave={() => muteAll()}
      >
        Unmute bass and drums
      </button>
      <div className="slidecontainer">
        <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
      </div>
    </div>
  );
}

export default SoundfxTone;
