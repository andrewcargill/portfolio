import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import audio from '../../media/soundfx/kick2.wav';
import css from "../../styles/SoundFxExperiments.module.css";

function SoundFxToneTwo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);
  const [volume, setVolume] = useState(0); // Initial volume level
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Ensure that Tone.js context is started after a user action
    document.addEventListener('click', () => {
      if (Tone.getContext().state !== 'running') {
        Tone.start();
      }
    }, { once: true });

    // Load the audio file
    const loadAudio = async () => {
      const player = new Tone.Player({
        url: audio, // Replace with the path to your audio file
        loop: true // Loop the audio playback
      }).toDestination();

      // Set player state
      setPlayer(player);
    };

    loadAudio();
  }, []);

  // Function to handle play/pause
  const togglePlayback = () => {
    if (!isPlaying) {
      // Start playing the audio
      player.start();
      setIsPlaying(true);
    } else {
      // Stop playing the audio
      player.stop();
      setIsPlaying(false);
    }
  };

  // Function to handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    player.volume.value = Tone.gainToDb(newVolume); // Convert linear gain to decibels
  };

  // Function to handle mute/unmute
  const toggleMute = () => {
    setIsMuted(!isMuted);
    player.mute = !isMuted;
  };

  return (
    <div>
      <button onClick={togglePlayback}>{isPlaying ? 'Stop' : 'Play'}</button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className={css.verticalSlider} // Add class for styling
      />
      <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
    </div>
  );
}

export default SoundFxToneTwo;
