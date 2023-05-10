import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import kickSound from "../../media/audio/kick.wav";
import kick2Sound from "../../media/audio/kick2.wav";

import snare from "../../media/audio/snare.wav";
import snare2 from "../../media/audio/snare2.wav";

import hihat from "../../media/audio/hi-hat.wav";
import hihat2 from "../../media/audio/hi-hat2.wav";

import tom from "../../media/audio/tom.wav";
import clav from "../../media/audio/clav.wav";

import basshit from "../../media/audio/basshit.wav";
import basshit2 from "../../media/audio/basshit2.wav";

import stab from "../../media/audio/stab.wav";
import stab2 from "../../media/audio/stab2.wav";


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

const perc = new Howl({ src: [tom]});
const perc2 = new Howl({ src: [clav]});

const bassline = new Howl({ src: [basshit]});
const bassline2 = new Howl({ src: [basshit2]});

const stabline = new Howl({ src: [stab]});
const stabline2 = new Howl({ src: [stab2]});

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

  const [percSteps, setPercSteps] = useState(Array(16).fill(false));
  const [percSelected, setPercSelected] = useState(perc);
  
  const [basslineSteps, setBasslineSteps] = useState(Array(16).fill(false));
  const [basslineSelected, setBasslineSelected] = useState(bassline);
  
  const [bassSteps, setBassSteps] = useState(Array(16).fill(false));
  const [synthSteps, setSynthSteps] = useState(Array(16).fill(false));
  const [synth2Steps, setSynth2Steps] = useState(Array(16).fill(false));

  const [playing, setPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [currentStep, setCurrentStep] = useState(null);
  
  const [kickMuted, setKickMuted] = useState(false);
  const [snareMuted, setSnareMuted] = useState(false);
  const [hihatMuted, setHihatMuted] = useState(false);
  const [percMuted, setPercMuted] = useState(false);
  const [basslineMuted, setBasslineMuted] = useState(false);

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

  const togglePercStep = (index) => {
    const newPercSteps = [...percSteps];
    newPercSteps[index] = !newPercSteps[index];
    setPercSteps(newPercSteps);
  };

  const toggleBasslineStep = (index) => {
    const newBasslineSteps = [...basslineSteps];
    newBasslineSteps[index] = !newBasslineSteps[index];
    setBasslineSteps(newBasslineSteps);
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

  const selectPercSound = (sound) => {
    setPercSelected(sound);
  };
  
  const selectBasslineSound = (sound) => {
    setBasslineSelected(sound);
  };

  useEffect(() => {
    console.log("snare muted", snareMuted);
    console.log("kick muted", kickMuted);
    console.log("hihat muted", hihatMuted);
    console.log("perc muted", percMuted);
    console.log("bass muted", basslineMuted);

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
        if (percSteps[step] && !percMuted) {
          percSelected.play();
        }
        if (basslineSteps[step] && !basslineMuted) {
          basslineSelected.play();
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
    synth2Steps, snareSelected, hihatSelected,
    percSelected, percMuted, percSteps,
    basslineSteps, basslineSelected, basslineMuted
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
              K1
            </button>
            <button
              onClick={() => selectKickSound(kick2)}
              disabled={kickSelected === kick2}
            >
              K2
            </button>
          </div>
          <button onClick={() => setKickMuted(!kickMuted)}
          className={kickMuted ? style.muted : style.unmuted}
          >
            {kickMuted ? "M" : "M"}
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
              S1
            </button>
            <button
              onClick={() => selectSnareSound(snare2Drum)}
              disabled={snareSelected === snare2}
            >
              S2
            </button>
          </div>
          
          <button onClick={() => setSnareMuted(!snareMuted)}
          className={snareMuted ? style.muted : style.unmuted}
          >
            {snareMuted ? "M" : "M"}
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
          <div>
            <button
              onClick={() => selectHihatSound(hiHat)}
              disabled={hihatSelected === hiHat}
            >
              H1
            </button>
            <button
              onClick={() => selectHihatSound(hiHat2)}
              disabled={hihatSelected === hiHat2}
            >
              H2
            </button>
          </div>
          <button
  onClick={() => setHihatMuted(!hihatMuted)}
  className={hihatMuted ? style.muted : style.unmuted}
>
  {hihatMuted ? "M" : "M"}
</button>

          {/* <button onClick={() => setHihatMuted(!hihatMuted)}>
            {hihatMuted ? "Unmute Hats" : "Mute Hats"}
          </button> */}
        </div>
        <div className="instrument">
          <div>Perc</div>
          {percSteps.map((step, index) => (
            <button
              key={`perc-${index}`}
              className={`${style.step} ${
                step && !percMuted ? style.active : ""
              } ${
                index === currentStep && !percMuted ? style.current : ""
              } ${
                index % 8 < 4 ? style.blue : style.black
              }`}
              onClick={() => togglePercStep(index)}
            ></button>
          ))}
          <div>
            <button
              onClick={() => selectPercSound(perc)}
              disabled={percSelected === perc}
            >
              P1
            </button>
            <button
              onClick={() => selectPercSound(perc2)}
              disabled={percSelected === perc2}
            >
              P2
            </button>
          </div>
          <button onClick={() => setPercMuted(!percMuted)}
          className={percMuted ? style.muted : style.unmuted}
          >
            {percMuted ? "M" : "M"}
          </button>
        </div>
        <div className="instrument">
          <div>Bass</div>
          {basslineSteps.map((step, index) => (
            <button
              key={`bassline-${index}`}
              className={`${style.step} ${
                step && !basslineMuted ? style.active : ""
              } ${
                index === currentStep && !basslineMuted ? style.current : ""
              } ${
                index % 8 < 4 ? style.blue : style.black
              }`}
              onClick={() => toggleBasslineStep(index)}
            ></button>
          ))}
          <div>
            <button
              onClick={() => selectBasslineSound(bassline)}
              disabled={basslineSelected === bassline}
            >
              P1
            </button>
            <button
              onClick={() => selectBasslineSound(bassline2)}
              disabled={basslineSelected === bassline2}
            >
              P2
            </button>
          </div>
          <button onClick={() => setBasslineMuted(!basslineMuted)}
          className={basslineMuted ? style.muted : style.unmuted}
          >
            {basslineMuted ? "M" : "M"}
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
