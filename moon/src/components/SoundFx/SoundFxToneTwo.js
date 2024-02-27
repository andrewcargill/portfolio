import React, { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';
import audio from '../../media/soundfx/kick2.wav';
import audio2 from '../../media/soundfx/bass1.wav';
import audio3 from '../../media/soundfx/bass2.wav';
import audio4 from '../../media/soundfx/hats.wav';
import css from '../../styles/SoundFxExperiments.module.css';

function SoundFxToneTwo() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0); // Initial volume level
  const [wetMix, setWetMix] = useState(0); 
  const [reverbMix, setReverbMix] = useState(0.5); 

  var delay = new Tone.FeedbackDelay("8n", 0.5).toDestination();
  var reverb = new Tone.Reverb(0.5).connect(delay);
  var tremelo = new Tone.Tremolo(9, 0.75).connect(reverb);
  
  const player = useRef(null);

  useEffect(() => {
    console.log('Delay wet value changed:', delay.wet.value);
    
    player.current = new Tone.Players({
      kick: audio,
      bass1: audio2,
      bass2: audio3,
      hats: audio4 
    },
      {
        onload: () => {
          setIsLoaded(true);
      }
    },
    
    ).connect(tremelo);

  }, []);

  const playAudio4 = () => {
      player.current.player('hats').start();
  };

  useEffect(() => {
    if (player.current.loaded) {
      player.current.volume.value = Tone.gainToDb(volume);
    }
  }, [volume]);
  
  const handleReverbChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setReverbMix(newVolume);
    reverb.wet.value = newVolume;
  };


  const handleWetMix = (e) => {
    const newWetMix = parseFloat(e.target.value);
    console.log(newWetMix);
    setWetMix(newWetMix);
    delay.wet.value = newWetMix;
    console.log('value' + delay.wet.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowUp') {
      // Call your function or trigger your event here
      player.current.player('bass1').start();
    } else if (event.key === 'ArrowDown') {
      // Call your function or trigger your event here
      player.current.player('bass2').start();
    } else if (event.key === 'ArrowRight') {
      // Call your function or trigger your event here
      player.current.player('kick').start();
    }

    if (event.key === ' ') {
      player.current.stopAll();
    }
  }


  return (
    <div onKeyDown={handleKeyPress} tabIndex={0}>
      <button disabled={!isLoaded} onClick={playAudio4}>start</button>

      <input
        disabled={!isLoaded}
        className={css.verticalSlider}
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(event) => setVolume(parseFloat(event.target.value))}
      />

      <input
        disabled={!isLoaded}
        className={css.verticalSlider}
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={reverbMix}
        onChange={handleReverbChange}
      />
      {/* <input
        disabled={!isLoaded}
        className={css.verticalSlider}
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={wetMix}
        onChange={handleWetMix}
      /> */}

      <input
        disabled={!isLoaded}
        
        type="number"
        min="0"
        max="1"
        step="0.01"
        value={wetMix}
        onChange={handleWetMix}
        />
    </div>
  );
}

export default SoundFxToneTwo;
