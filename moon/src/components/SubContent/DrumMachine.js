import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import kicker from "../../media/audio/kick.wav";
import snare from "../../media/audio/snare.wav";
import hihat from "../../media/audio/hi-hat.wav";
import style from "../../styles/DrumMachine.module.css";

const kick = new Howl({ src: [kicker] });
const snareDrum = new Howl({ src: [snare] });
const hiHat = new Howl({ src: [hihat] });

const DrumMachine = () => {
  const [kickSteps, setKickSteps] = useState(Array(8).fill(false));
  const [snareSteps, setSnareSteps] = useState(Array(8).fill(false));
  const [hihatSteps, setHihatSteps] = useState(Array(8).fill(false));
  const [playing, setPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const toggleKickStep = (index) => {
    const newKickSteps = [...kickSteps];
    newKickSteps[index] = !newKickSteps[index];
    setKickSteps(newKickSteps);
  };

  const toggleSnareStep = (index) => {
    const newSnareSteps = [...snareSteps];
    newSnareSteps[index] = !newSnareSteps[index];
    setSnareSteps(newSnareSteps);
  };

  const toggleHihatStep = (index) => {
    const newHihatSteps = [...hihatSteps];
    newHihatSteps[index] = !newHihatSteps[index];
    setHihatSteps(newHihatSteps);
  };

  useEffect(() => {
    if (playing) {
      let step = 0;
      const id = setInterval(() => {
        if (kickSteps[step]) {
          kick.play();
        }
        if (snareSteps[step]) {
          snareDrum.play();
        }
        if (hihatSteps[step]) {
          hiHat.play();
        }
        step = (step + 1) % 8;
      }, 250);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [kickSteps, snareSteps, hihatSteps, playing]);

  const playSequence = () => {
    setPlaying(true);
  };

  const stopSequence = () => {
    setPlaying(false);
    clearInterval(intervalId);
  };

  return (
    <div>
      <button onClick={playSequence} disabled={playing}>
        Play
      </button>
      <button onClick={stopSequence} disabled={!playing}>
        Stop
      </button>
      <div className={style.instrumentLine}>
        <div className="instrument">
          <div>Kick</div>
          {kickSteps.map((step, index) => (
            <button
              key={`kick-${index}`}
              className={`${style.step} ${step ? style.active : ""}`}
              onClick={() => toggleKickStep(index)}
            ></button>
          ))}
        </div>
        <div className="instrument">
          <div>Snare</div>
          {snareSteps.map((step, index) => (
            <button
              key={`snare-${index}`}
              className={`${style.step} ${step ? style.active : ""}`}
              onClick={() => toggleSnareStep(index)}
            ></button>
          ))}
        </div>
        <div className="instrument">
          <div>Hi-hat</div>
          {hihatSteps.map((step, index) => (
           

            <button
              key={`snare-${index}`}
              className={`${style.step} ${step ? style.active : ""}`}
              onClick={() => toggleHihatStep(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
