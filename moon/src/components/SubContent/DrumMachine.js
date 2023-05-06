import React, { useState, useEffect } from "react";
import styles from "../../styles/DrumMachine.module.css";
import kick from "../../media/audio/boo.wav";
import snare from "../../media/audio/snare.wav";

function DrumMachine() {
  const [tempo, setTempo] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [kickSequencerSteps, setKickSequencerSteps] = useState([1, 0, 0, 0, 1, 0, 0, 0]); // An example of kick sequencer steps
  const [snareSequencerSteps, setSnareSequencerSteps] = useState([0, 0, 0, 0, 0, 0, 0, 0]); // An example of snare sequencer steps

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setCurrentStep(0);
  };

  const handleTempoChange = (event) => {
    setTempo(event.target.value);
  };

  const toggleKickStep = (index) => {
    const newSteps = [...kickSequencerSteps];
    newSteps[index] = newSteps[index] ? 0 : 1;
    setKickSequencerSteps(newSteps);
  };

  const toggleSnareStep = (index) => {
    const newSteps = [...snareSequencerSteps];
    newSteps[index] = newSteps[index] ? 0 : 1;
    setSnareSequencerSteps(newSteps);
  };

  const playStep = (step, drum) => {
    if (step === 0) {
      return;
    }
    const audio = new Audio(drum === "kick" ? kick : snare);
    audio.currentTime = 0;
    audio.play();
  };

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      const intervalTime = (60 / tempo) * 1000;
      intervalId = setInterval(() => {
        playStep(kickSequencerSteps[currentStep], "kick");
        playStep(snareSequencerSteps[currentStep], "snare");
        setCurrentStep((currentStep + 1) % 8);
      }, intervalTime);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, currentStep, kickSequencerSteps, snareSequencerSteps, tempo]);

  return (
    <div>
      <div className={styles.sequencer}>
        <div className={styles.row}>
          {kickSequencerSteps.map((step, index) => (
            <button
              key={index}
              className={step ? styles.active : ""}
              onClick={() => toggleKickStep(index)}
            ></button>
          ))}
        </div>
        <div className={styles.row}>
          {snareSequencerSteps.map((step, index) => (
            <button
              key={index}
              className={step ? styles.active : ""}
              onClick={() => toggleSnareStep(index)}
            ></button>
          ))}
        </div>
      </div>
      <div className={styles["drum-buttons"]}>
        <button className={styles.kick} onClick={() => playStep(1, "kick")}></button>
        <button className={styles.snare} onClick={() => playStep(1, "snare")}></button>
      </div>
      <button className={styles.toggle} onClick={togglePlay}>
        {isPlaying ? "Stop" : "Play"}
      </button>

      <input
  type="number"
  value={tempo}
  onChange={handleTempoChange}
  min="1"
  max="300"
/>
    </div>
  );
}

export default DrumMachine;
