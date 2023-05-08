import React, { useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import kickSound from "../../media/audio/kick.wav";
import snareSound from "../../media/audio/snare.wav";
import style from "../../styles/DrumMachine.module.css";

const kick = new Howl({ src: [kickSound] });
const snare = new Howl({ src: [snareSound] });


const DrumMachineTwo = () => {
  const [kickSteps, setKickSteps] = useState(Array(16).fill(false));
  const [snareSteps, setSnareSteps] = useState(Array(16).fill(false));
  const [playing, setPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [kickMuted, setKickMuted] = useState(false);
  const [snareMuted, setSnareMuted] = useState(false);

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

  useEffect(() => {

    if (playing) {
      let step = 0;
      const id = setInterval(() => {
        if (kickSteps[step] && !kickMuted) {
          kick.play();
        }
        if (snareSteps[step] && !snareMuted) {
          snare.play();
        }
        setCurrentStep(step);
        step = (step + 1) % 16;
      }, 250);
      setIntervalId(id);
      return () => clearInterval(id);
    }

  }, [kickSteps, snareSteps, playing, kickMuted, snareMuted]);

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
              className={`${style.step} ${
                step && !kickMuted ? style.active : ""
              } ${
                index === currentStep && !kickMuted ? style.current : ""
              } ${
                index % 8 < 4 ? style.blue : style.black
              }`}
              onClick={() => toggleKickStep(index)}
            ></button>
          ))}
          <button onClick={() => setKickMuted(!kickMuted)}>
            {kickMuted ? "Unmute Kick" : "Mute Kick"}
          </button>
        </div>
        <div className="instrument">
          <div>Snare</div>
          {snareSteps.map((step, index) => (
            <button
            key={`snare-${index}`}
            className={`${style.step} ${
              step && !snareMuted ? style.active : ""
            } ${
              index === currentStep && !snareMuted ? style.current : ""
            } ${
              index % 8 < 4 ? style.blue : style.black
            }`}
            onClick={() => toggleSnareStep(index)}
          ></button>
          ))}
          <button onClick={() => setSnareMuted(!snareMuted)}>
            {snareMuted ? "Unmute Snare" : "Mute Snare"}
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default DrumMachineTwo;
