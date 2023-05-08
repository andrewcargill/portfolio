import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import kickSound from "../../media/audio/kick.wav";
import snare from "../../media/audio/snare.wav";
import hihat from "../../media/audio/hi-hat.wav";
import bassSound from "../../media/audio/bass1.wav";
import synthSound from "../../media/audio/synth2.wav";
import style from "../../styles/DrumMachine.module.css";

const kick = new Howl({ src: [kickSound] });
const snareDrum = new Howl({ src: [snare] });
const hiHat = new Howl({ src: [hihat] });
const bass = new Howl({ src: [bassSound] });
const synth = new Howl({ src: [synthSound] });

const DrumMachine = () => {
  const [kickSteps, setKickSteps] = useState(Array(16).fill(false));
  const [snareSteps, setSnareSteps] = useState(Array(16).fill(false));
  const [hihatSteps, setHihatSteps] = useState(Array(16).fill(false));
  const [bassSteps, setBassSteps] = useState(Array(16).fill(false));
  const [synthSteps, setSynthSteps] = useState(Array(16).fill(false));
  const [playing, setPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const [currentStep, setCurrentStep] = useState(null);

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

  const toggleBassStep = (index) => {
    const newBassSteps = [...bassSteps];
    newBassSteps[index] = !newBassSteps[index];
    setBassSteps(newBassSteps);
  };

  const toggleSynthStep = (index) => {
    const newSynthSteps = [...synthSteps];
    newSynthSteps[index] = !newSynthSteps[index];
    setSynthSteps(newSynthSteps);
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
        if (bassSteps[step]) {
          bass.play();
        }
        if (synthSteps[0] && step === 0) {
          synth.play();
        }
        setCurrentStep(step);
        step = (step + 1) % 16;
      }, 250);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [kickSteps, snareSteps, hihatSteps, bassSteps, synthSteps, playing]);

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
                step ? style.active : ""
              } ${index === currentStep ? style.current : ""} ${
                index % 8 < 4 ? style.blue : style.black
              }`}
              onClick={() => toggleKickStep(index)}
            ></button>
          ))}
        </div>
        <div className="instrument">
          <div>Snare</div>
          {snareSteps.map((step, index) => (
            <button
              key={`snare-${index}`}
              className={`${style.step} ${step ? style.active : ""} ${index % 8 < 4 ? style.blue : style.black}`}
              onClick={() => toggleSnareStep(index)}
            ></button>
          ))}
        </div>
        <div className="instrument">
          <div>Hi-hat</div>
          {hihatSteps.map((step, index) => (
            <button
              key={`snare-${index}`}
              className={`${style.step} ${step ? style.active : ""} ${index % 8 < 4 ? style.blue : style.black}`}
              onClick={() => toggleHihatStep(index)}
            ></button>
          ))}
        </div>
        <div className="instrument">
          <div>Bass</div>
            <button
              key={`bass-0`}
              className={`${style.step} ${bassSteps[0] ? style.active : ""}`}
              onClick={() => toggleBassStep(0)}
            ></button>
        </div>
        <div className="instrument">
          <div>Synth</div>
            <button
              key={`synth-0`}
              className={`${style.step} ${synthSteps[0] ? style.active : ""}`}
              onClick={() => toggleSynthStep(0)}
            ></button>
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
