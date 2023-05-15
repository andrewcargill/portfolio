import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

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

import bassSound from "../../media/audio/vox1.wav";
import synthSound from "../../media/audio/jingle.wav";
import synthTwoSound from "../../media/audio/crash.wav";

import style from "../../styles/DrumMachine.module.css";
import {
  faPlay,
  faPause,
  faHatCowboy,
  faBurst,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faPlay, faPause, faHatCowboy, faBurst, faUmbrellaBeach);

const kick = new Howl({ src: [kickSound] });
const kick2 = new Howl({ src: [kick2Sound] });

const snareDrum = new Howl({ src: [snare] });
const snare2Drum = new Howl({ src: [snare2] });

const hiHat = new Howl({ src: [hihat] });
const hiHat2 = new Howl({ src: [hihat2] });

const perc = new Howl({ src: [tom] });
const perc2 = new Howl({ src: [clav] });

const bassline = new Howl({ src: [basshit] });
const bassline2 = new Howl({ src: [basshit2] });

const fxa = new Howl({ src: [stab] });
const fxb = new Howl({ src: [stab2] });

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

  const [fxSteps, setFxSteps] = useState(Array(16).fill(false));
  const [fxSelected, setFxSelected] = useState(bassline);

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
  const [fxMuted, setFxMuted] = useState(false);

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

  const toggleFxStep = (index) => {
    const newFxSteps = [...fxSteps];
    newFxSteps[index] = !newFxSteps[index];
    setFxSteps(newFxSteps);
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

  const selectFxSound = (sound) => {
    setFxSelected(sound);
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
        if (fxSteps[step] && !fxMuted) {
          fxSelected.play();
        }
        if (bassSteps[step] && step === 12) {
          bass.play();
        }
        if (synthSteps[step] && step === 0) {
          synth.play();
        }
        if (synth2Steps[step] && step === 5) {
          synth2.play();
        }
        setCurrentStep(step);
        step = (step + 1) % 16;
      }, 250);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [
    kickSteps,
    kickSelected,
    snareSteps,
    hihatSteps,
    bassSteps,
    synthSteps,
    playing,
    kickMuted,
    snareMuted,
    hihatMuted,
    synth2Steps,
    snareSelected,
    hihatSelected,
    percSelected,
    percMuted,
    percSteps,
    basslineSteps,
    basslineSelected,
    basslineMuted,
    fxSteps,
    fxSelected,
    fxMuted,
  ]);

  const playSequence = () => {
    setPlaying((prevPlaying) => !prevPlaying);
  };

  return (
    <div className="text-border right-margin-desktop image-container">
      <div className={style.drumMachineContainer}>

        <div className={style.topControlsContainer}>
        {/* Transport */}
        <div className={style.transportButtons}>
          <button onClick={playSequence} className={style.transportButton}>
            {playing ? (
              <FontAwesomeIcon icon="fa-pause" />
            ) : (
              <FontAwesomeIcon icon="fa-play" />
            )}
          </button>
          
        </div>
        {/* Extra Sounds */}
        <div className={style.extraSoundButtons}>
          <div className="instrument">
            <button
              key={`bass-0`}
              className={`${style.extraStep} ${
                bassSteps[12] ? style.active : ""
              }`}
              onClick={() => toggleBassStep(12)}
            >
              <FontAwesomeIcon icon="fa-hat-cowboy" />
            </button>
          </div>
          <div className="instrument">
            <button
              key={`synth-0`}
              className={`${style.extraStep} ${
                synthSteps[0] ? style.active : ""
              }`}
              onClick={() => toggleSynthStep(0)}
            >
              <FontAwesomeIcon icon={faBurst} />
            </button>
          </div>
          <div className="instrument">
            <button
              key={`synth2-0`}
              className={`${style.extraStep} ${
                synth2Steps[5] ? style.active : ""
              }`}
              onClick={() => toggleSynth2Step(5)}
            >
              <FontAwesomeIcon icon={faUmbrellaBeach} />
            </button>
          </div>
        </div>
        </div>

        {/* Main Instrument */}
        <div className={style.instrumentLine}>
          <div className={style.instrument}>
            <div>K</div>
            {kickSteps.map((step, index) => (
              <div
                key={`kick-${index}`}
                className={`${style.step} ${
                  step && !kickMuted ? style.active : ""
                } ${index === currentStep && !kickMuted ? style.current : ""} ${
                  index % 8 < 4 ? style.blue : style.black
                }`}
                onClick={() => toggleKickStep(index)}
              ></div>
            ))}
            <div className={style.abButtons}>
              <button
                onClick={() => selectKickSound(kick)}
                disabled={kickSelected === kick}
              >
                A
              </button>
              <button
                onClick={() => selectKickSound(kick2)}
                disabled={kickSelected === kick2}
              >
                B
              </button>
            </div>
            <button
              onClick={() => setKickMuted(!kickMuted)}
              className={kickMuted ? style.muted : style.unmuted}
            >
              {kickMuted ? "M" : "M"}
            </button>
          </div>
          <div className={style.instrument}>
            <div>S</div>
            {snareSteps.map((step, index) => (
              <div
                key={`snare-${index}`}
                className={`${style.step} ${
                  step && !snareMuted ? style.active : ""
                } ${
                  index === currentStep && !snareMuted ? style.current : ""
                } ${index % 8 < 4 ? style.blue : style.black}`}
                onClick={() => toggleSnareStep(index)}
              ></div>
            ))}
            <div className={style.abButtons}>
              <button
                onClick={() => selectSnareSound(snareDrum)}
                disabled={snareSelected === snare}
              >
                A
              </button>
              <button
                onClick={() => selectSnareSound(snare2Drum)}
                disabled={snareSelected === snare2}
              >
                B
              </button>
            </div>

            <button
              onClick={() => setSnareMuted(!snareMuted)}
              className={snareMuted ? style.muted : style.unmuted}
            >
              {snareMuted ? "M" : "M"}
            </button>
          </div>
          <div className={style.instrument}>
            <div>H</div>
            {hihatSteps.map((step, index) => (
              <div
                key={`hihat-${index}`}
                className={`${style.step} ${
                  step && !hihatMuted ? style.active : ""
                } ${
                  index === currentStep && !hihatMuted ? style.current : ""
                } ${index % 8 < 4 ? style.blue : style.black}`}
                onClick={() => toggleHihatStep(index)}
              ></div>
            ))}
            <div className={style.abButtons}>
              <button
                onClick={() => selectHihatSound(hiHat)}
                disabled={hihatSelected === hiHat}
              >
                A
              </button>
              <button
                onClick={() => selectHihatSound(hiHat2)}
                disabled={hihatSelected === hiHat2}
              >
                B
              </button>
            </div>
            <button
              onClick={() => setHihatMuted(!hihatMuted)}
              className={hihatMuted ? style.muted : style.unmuted}
            >
              {hihatMuted ? "M" : "M"}
            </button>
          </div>
          <div className={style.instrument}>
            <div>P</div>
            {percSteps.map((step, index) => (
              <div
                key={`perc-${index}`}
                className={`${style.step} ${
                  step && !percMuted ? style.active : ""
                } ${index === currentStep && !percMuted ? style.current : ""} ${
                  index % 8 < 4 ? style.blue : style.black
                }`}
                onClick={() => togglePercStep(index)}
              ></div>
            ))}
            <div className={style.abButtons}>
              <button
                onClick={() => selectPercSound(perc)}
                disabled={percSelected === perc}
              >
                A
              </button>
              <button
                onClick={() => selectPercSound(perc2)}
                disabled={percSelected === perc2}
              >
                B
              </button>
            </div>
            <button
              onClick={() => setPercMuted(!percMuted)}
              className={percMuted ? style.muted : style.unmuted}
            >
              {percMuted ? "M" : "M"}
            </button>
          </div>
          <div className={style.instrument}>
            <div>B</div>
            {basslineSteps.map((step, index) => (
              <div
                key={`bassline-${index}`}
                className={`${style.step} ${
                  step && !basslineMuted ? style.active : ""
                } ${
                  index === currentStep && !basslineMuted ? style.current : ""
                } ${index % 8 < 4 ? style.blue : style.black}`}
                onClick={() => toggleBasslineStep(index)}
              ></div>
            ))}
            <div className={style.abButtons}>
              <button
                onClick={() => selectBasslineSound(bassline)}
                disabled={basslineSelected === bassline}
              >
                A
              </button>
              <button
                onClick={() => selectBasslineSound(bassline2)}
                disabled={basslineSelected === bassline2}
              >
                B
              </button>
            </div>
            <button
              onClick={() => setBasslineMuted(!basslineMuted)}
              className={basslineMuted ? style.muted : style.unmuted}
            >
              {basslineMuted ? "M" : "M"}
            </button>
          </div>
          <div className={style.instrument}>
            <div>FX</div>
            {fxSteps.map((step, index) => (
              <div
                key={`fx-${index}`}
                className={`${style.step} ${
                  step && !fxMuted ? style.active : ""
                } ${index === currentStep && !fxMuted ? style.current : ""} ${
                  index % 8 < 4 ? style.blue : style.black
                }`}
                onClick={() => toggleFxStep(index)}
              ></div>
            ))}
            <div className={style.abButtons}>
              <button
                onClick={() => selectFxSound(fxa)}
                disabled={fxSelected === fxa}
              >
                A
              </button>
              <button
                onClick={() => selectFxSound(fxb)}
                disabled={fxSelected === fxb}
              >
                B
              </button>
            </div>
            <button
              onClick={() => setFxMuted(!fxMuted)}
              className={fxMuted ? style.muted : style.unmuted}
            >
              {fxMuted ? "M" : "M"}
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DrumMachine;
