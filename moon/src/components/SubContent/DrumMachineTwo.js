import React, { useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import kickSound from "../../media/audio/kick.wav";
import style from "../../styles/DrumMachine.module.css";

const kick = new Howl({ src: [kickSound] });

const DrumMachineTwo = () => {
  const [kickSteps, setKickSteps] = useState(Array(16).fill(false));
  const [playing, setPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [kickMuted, setKickMuted] = useState(false);

  const toggleKickStep = (index) => {
    console.log("kick Steps", kickSteps)
    const newKickSteps = [...kickSteps];
    newKickSteps[index] = !newKickSteps[index];
    setKickSteps(newKickSteps);
  };

useEffect(() => {
  console.log("currentStep", currentStep)
  console.log("playing", playing)
  console.log("kickSteps", kickSteps)
  
  if (playing) {
    let step = currentStep;
    const id = setInterval(() => {
      if (kickSteps[step] && !kickMuted) {
        console.log("kickplay");
        kick.play();
      }
      setCurrentStep(step);
        step = (step + 1) % 16;
    }, 250);
    setIntervalId(id);
    return () => clearInterval(id);
  }
}, [kickSteps, playing, kickMuted, currentStep]);


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
            {kickMuted ? "Unmute ick" : "Mute Kick"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrumMachineTwo;
