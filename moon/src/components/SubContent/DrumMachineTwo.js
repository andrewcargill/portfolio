import React, { useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import kickSound from "../../media/audio/kick.wav";
import kick2Sound from "../../media/audio/kick2.wav";
import style from "../../styles/DrumMachine.module.css";

const kick = new Howl({ src: [kickSound] });
const kick2 = new Howl({ src: [kick2Sound] });

const DrumMachineTwo = () => {
  const [kickSteps, setKickSteps] = useState(Array(16).fill(false));
  const [playing, setPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [kickMuted, setKickMuted] = useState(false);
  const [kickSelected, setKickSelected] = useState(kick);
  const [isKickPlaying, setIsKickPlaying] = useState(false);


  const toggleKickStep = (index) => {
    const newKickSteps = [...kickSteps];
    newKickSteps[index] = !newKickSteps[index];
    setKickSteps(newKickSteps);
  };

  const selectKickSound = (sound) => {
    setKickSelected(sound);
  };

  useEffect(() => {
    if (playing) {
      let step = currentStep;
      const id = setInterval(() => {
        if (kickSteps[step] && !kickMuted && !isKickPlaying) {
          const soundId = kickSelected.play();
          setIsKickPlaying(true);
          kickSelected.once("end", () => setIsKickPlaying(false), soundId);
        }
        setCurrentStep(step);
        step = (step + 1) % 16;
      }, 250);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [kickSteps, playing, kickMuted, kickSelected, currentStep, isKickPlaying]);
  

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
          <div>
            <button
              onClick={() => selectKickSound(kick)}
              disabled={kickSelected === kick}
            >
              Kick 1
            </button>
            <button
              onClick={() => selectKickSound(kick2)}
              disabled={kickSelected === kick2}
            >
              Kick 2
            </button>
          </div>
          <button onClick={() => setKickMuted(!kickMuted)}>
            {kickMuted ? "Unmute Kick" : "Mute Kick"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrumMachineTwo;
