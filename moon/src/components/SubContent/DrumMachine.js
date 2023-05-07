import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import kicker from "../../media/audio/kick.wav";
import style from "../../styles/DrumMachine.module.css";

const kick = new Howl({ src: [kicker] });

const DrumMachine = () => {
  const [kickSteps, setKickSteps] = useState(Array(4).fill(false));
  const [playing, setPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const toggleStep = (index) => {
    const newKickSteps = [...kickSteps];
    newKickSteps[index] = !newKickSteps[index];
    setKickSteps(newKickSteps);
  };

  useEffect(() => {
    let step = 0;
    const playStep = () => {
      if (kickSteps[step]) {
        kick.play();
      }
      step = (step + 1) % 4;
    };

    if (playing) {
      const id = setInterval(playStep, 250);
      setIntervalId(id);
      return () => clearInterval(id);
    }
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
              className={`${style.step} ${step ? style.active : ""}`}
              onClick={() => toggleStep(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
