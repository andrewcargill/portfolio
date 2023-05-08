import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import kickSound from "../../media/audio/kick.wav";
import synthSound from "../../media/audio/synth2.wav";
import style from "../../styles/DrumMachine.module.css";

const kick = new Howl({ src: [kickSound] });
const synth = new Howl({ 
  src: [synthSound],
  volume: 0.5 
});

const DrumMachineTwo = () => {
  const [kickSteps, setKickSteps] = useState(Array(16).fill(false));
  const [playing, setPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const toggleKickStep = (index) => {
    const newKickSteps = [...kickSteps];
    newKickSteps[index] = !newKickSteps[index];
    setKickSteps(newKickSteps);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 's') {
        synth.play();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    if (playing) {
      let step = 0;
      const id = setInterval(() => {
        if (kickSteps[step]) {
          kick.play();
        }
        setCurrentStep(step);
        step = (step + 1) % 16;
      }, 250);
      setIntervalId(id);
      return () => clearInterval(id);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [kickSteps, playing]);

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
        className={`${style.step} ${step ? style.active : ""} ${index % 8 < 4 ? style.blue : style.black}`}
        onClick={() => toggleKickStep(index)}
      ></button>
    ))}
  </div>
</div>

    </div>
  );
};

export default DrumMachineTwo;
