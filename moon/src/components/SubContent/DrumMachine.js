import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import kickSound from "../../media/audio/kick.wav";
import kick2Sound from "../../media/audio/kick2.wav";
import snare from "../../media/audio/snare.wav";
import snare2 from "../../media/audio/snare2.wav";
import hihat from "../../media/audio/hi-hat.wav";
import hihat2 from "../../media/audio/hi-hat2.wav";
import bassSound from "../../media/audio/bass1.wav";
import synthSound from "../../media/audio/synth2.wav";
import synthTwoSound from "../../media/audio/synth3.wav";
import style from "../../styles/DrumMachine.module.css";

const kick = new Howl({ src: [kickSound] });
const kick2 = new Howl({ src: [kick2Sound] });

const snareDrum = new Howl({ src: [snare] });
const snare2Drum = new Howl({ src: [snare2] });

const hiHat = new Howl({ src: [hihat] });
const hiHat2 = new Howl({ src: [hihat2] });
const bass = new Howl({ src: [bassSound] });
const synth = new Howl({ src: [synthSound] });
const synth2 = new Howl({ src: [synthTwoSound] });

const DrumMachine = () => {
  const [kickSteps, setKickSteps] = useState(Array(16).fill(false));
  const [kickSelected, setKickSelected] = useState(kick);

  const [snareSteps, setSnareSteps] = useState(Array(16).fill(false));
  const [snareSelected, setSnareSelected] = useState(snare2Drum);
  
  const [hihatSteps, setHihatSteps] = useState(Array(16).fill(false));
  const [hihatSelected, setHihatSelected] = useState(hiHat2);
  
  const [bassSteps, setBassSteps] = useState(Array(16).fill(false));
  const [synthSteps, setSynthSteps] = useState(Array(16).fill(false));
  const [synth2Steps, setSynth2Steps] = useState(Array(16).fill(false));

  const [playing, setPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [currentStep, setCurrentStep] = useState(null);
  
  const [kickMuted, setKickMuted] = useState(false);
  const [snareMuted, setSnareMuted] = useState(false);
  const [hihatMuted, setHithatMuted] = useState(false);

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

  const toggleSynth2Step = (index) => {
    const newSynth2Steps = [...synth2Steps];
    newSynth2Steps[index] = !newSynth2Steps[index];
    setSynth2Steps(newSynth2Steps);
  };

  const selectKickSound = (sound) => {
    setKickSelected(sound);
  };

  const selectSnareSound = (sound) => {
    setSnareSelected(sound);
  };

  const selectHihatSound = (sound) => {
    setHihatSelected(sound);
  };

  useEffect(() => {
    console.log("snare muted", snareMuted);
    console.log("kick drum", kickMuted);
    if (playing) {
      let step = 0;
      const id = setInterval(() => {
        if (kickSteps[step] && !kickMuted) {
          kickSelected.play();
        }
        if (snareSteps[step] && !snareMuted) {
          snareSelected.play();
        }
        if (hihatSteps[step] && !hihatMuted) {
          hihatSelected.play();
        }
        if (bassSteps[step]) {
          bass.play();
        }
        if (synthSteps[0] && step === 0) {
          synth.play();
        }
        if (synth2Steps[0] && step === 0) {
          synth2.play();
        }
        setCurrentStep(step);
        step = (step + 1) % 16;
      }, 250);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [kickSteps, kickSelected, snareSteps, hihatSteps, 
    bassSteps, synthSteps, playing,
    kickMuted, snareMuted, hihatMuted,
    synth2Steps, snareSelected, hihatSelected
  ]);

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
          <div>
            <button
              onClick={() => selectSnareSound(snareDrum)}
              disabled={snareSelected === snare}
            >
              Kick 1
            </button>
            <button
              onClick={() => selectSnareSound(snare2Drum)}
              disabled={snareSelected === snare2}
            >
              Kick 2
            </button>
          </div>
          
          <button onClick={() => setSnareMuted(!snareMuted)}>
            {snareMuted ? "Unmute Snr" : "Mute Snr"}
          </button>
        </div>
        <div className="instrument">
          <div>Hi-hat</div>
          {hihatSteps.map((step, index) => (
            <button
              key={`hihat-${index}`}
              className={`${style.step} ${
                step && !hihatMuted ? style.active : ""
              } ${
                index === currentStep && !hihatMuted ? style.current : ""
              } ${
                index % 8 < 4 ? style.blue : style.black
              }`}
              onClick={() => toggleHihatStep(index)}
            ></button>
          ))}
          
          <button onClick={() => setHithatMuted(!hihatMuted)}>
            {hihatMuted ? "Unmute Hats" : "Mute Hats"}
          </button>
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
        <div className="instrument">
          <div>Synth_2</div>
            <button
              key={`synth2-0`}
              className={`${style.step} ${synth2Steps[0] ? style.active : ""}`}
              onClick={() => toggleSynth2Step(0)}
            ></button>
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
