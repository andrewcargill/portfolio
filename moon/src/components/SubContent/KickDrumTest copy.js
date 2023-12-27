import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import kickSoundA from "../../media/audio/kick.wav";
import kickSoundB from "../../media/audio/kick2.wav";
import style from "../../styles/DrumMachine.module.css";

const KickDrumTest = () => {
  const [kickSteps, setKickSteps] = useState(Array(16).fill(false));
  const [kickSelected, setKickSelected] = useState(new Howl({ src: [kickSoundA] }));
  const [kickMuted, setKickMuted] = useState(false);
  const [currentStep, setCurrentStep] = useState(null);

  const toggleKickStep = (index) => {
    const newKickSteps = [...kickSteps];
    newKickSteps[index] = !newKickSteps[index];
    setKickSteps(newKickSteps);
  };

  const selectKickSound = (sound) => {
    setKickSelected(sound);
  };

  const resetKickSteps = () => {
    setKickSteps(Array(16).fill(false));
  };

  useEffect(() => {
    // Playback logic for the kick drum
    let step = 0;
    const id = setInterval(() => {
      if (kickSteps[step] && !kickMuted) {
        kickSelected.play();
      }
      setCurrentStep(step);
      step = (step + 1) % 16;
    }, 250);

    return () => clearInterval(id);
  }, [kickSteps, kickSelected, kickMuted]);

  return (
    <div className={style.instrument}>
      <div>K</div>
      {kickSteps.map((step, index) => (
        <div
          key={`kick-${index}`}
          className={`${style.step} ${step && !kickMuted ? style.active : ""} ${
            index === currentStep && !kickMuted ? style.current : ""
          } ${index % 8 < 4 ? style.blue : style.black}`}
          onClick={() => toggleKickStep(index)}
        ></div>
      ))}
      <div className={style.abButtons}>
        <button
          onClick={() => selectKickSound(new Howl({ src: [kickSoundA] }))}
          className={style.drumButton}
          disabled={kickSelected === kickSoundA}
        >
          A
        </button>
        <button
          onClick={() => selectKickSound(new Howl({ src: [kickSoundB] }))}
          className={style.drumButton}
          disabled={kickSelected === kickSoundB}
        >
          B
        </button>
      </div>
      <button
        onClick={() => setKickMuted(!kickMuted)}
        className={`${style.drumButton} ${kickMuted ? style.muted : style.unmuted}`}
      >
        {kickMuted ? "M" : "M"}
      </button>
      <button onClick={resetKickSteps} className={style.resetButton}>
        Reset
      </button>
    </div>
  );
};

export default KickDrumTest;
