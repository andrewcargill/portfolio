import React, { useState, useRef } from "react";
import style from "../../styles/Cube.module.css";

const Cube = () => {
  const [cubeRotation, setCubeRotation] = useState({ x: 0, y: 0 });
  const [clickedWords, setClickedWords] = useState([]);
  const cubeRef = useRef(null);
  const touchStartRef = useRef(null);

  const handleMouseDown = (event) => {
    const { target } = event;
    if (target.classList.contains(style.clickable)) {
      return;
    }
  
    event.preventDefault();
    const { clientX, clientY } = event;
    const { left, top } = cubeRef.current.getBoundingClientRect();
    const offsetX = clientX - left;
    const offsetY = clientY - top;
  
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  
    setCubeRotation({ x: offsetY, y: offsetX });
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const cubeRect = cubeRef.current.getBoundingClientRect();
    const offsetX = clientX - cubeRect.left;
    const offsetY = clientY - cubeRect.top;

    setCubeRotation({ x: offsetY, y: offsetX });
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    const { clientX, clientY } = touch;
    const cubeRect = cubeRef.current.getBoundingClientRect();
    const offsetX = clientX - cubeRect.left;
    const offsetY = clientY - cubeRect.top;

    touchStartRef.current = { offsetX, offsetY };
  };

  const handleTouchMove = (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    const { clientX, clientY } = touch;
    const cubeRect = cubeRef.current.getBoundingClientRect();
    const offsetX = clientX - cubeRect.left;
    const offsetY = clientY - cubeRect.top;

    setCubeRotation({ x: offsetY, y: offsetX });
  };

  const handleWordClick = (word) => {
    if (clickedWords.length === 0) {
      setCubeRotation({ x: 0, y: 0 }); // Reset cube rotation
    }
  
    if (clickedWords.includes(word)) {
      setClickedWords((prevClickedWords) =>
        prevClickedWords.filter((clickedWord) => clickedWord !== word)
      );
    } else {
      setClickedWords((prevClickedWords) => [...prevClickedWords, word]);
    }
  };

  const frontwords = [
    { word: "Wealth. ", ref: "Wealth ", onClick: handleWordClick },
    { word: "Happiness. ", ref: "Happiness ", onClick: handleWordClick },
    { word: "Invest. ", ref: "Invest ", onClick: handleWordClick },
    { word: "Impulse. ", ref: "Impulse ", onClick: handleWordClick },
    { word: "Adventure. ", ref: "Adventure ", onClick: handleWordClick },
    { word: "Stable. ", ref: "Stable ", onClick: handleWordClick },
    { word: "Now. ", ref: "Now ", onClick: handleWordClick },
    
    
  ];

  const backwords = [
    { word: "Enemy. ", ref: "Enemy ", onClick: handleWordClick },
    { word: "Take. ", ref: "Take ", onClick: handleWordClick },
    { word: "Win. ", ref: "Win ", onClick: handleWordClick },
    { word: "Better. ", ref: "Better ", onClick: handleWordClick },
    { word: "Prove. ", ref: "Prove ", onClick: handleWordClick },
    { word: "Impress. ", ref: "Impress ", onClick: handleWordClick },
    { word: "Greed. ", ref: "Greed ", onClick: handleWordClick },
    { word: "Shame. ", ref: "Shame ", onClick: handleWordClick },
  ];

  const topwords = [
    { word: "Empathy. ", ref: "Empathy ", onClick: handleWordClick },
    { word: "Care. ", ref: "Care ", onClick: handleWordClick },
    { word: "Share. ", ref: "Share ", onClick: handleWordClick },
    { word: "Smile. ", ref: "Smile ", onClick: handleWordClick },
    { word: "Reason. ", ref: "Reason ", onClick: handleWordClick },
    { word: "Understand. ", ref: "Understand ", onClick: handleWordClick },
  ];

  const bottomwords = [
    { word: "Beach. ", ref: "Beach ", onClick: handleWordClick },
    { word: "City. ", ref: "City ", onClick: handleWordClick },
    { word: "Nightclub. ", ref: "Nightclub ", onClick: handleWordClick },
    { word: "Loacl bar. ", ref: "Local bar ", onClick: handleWordClick },
    { word: "Countryside. ", ref: "Countryside ", onClick: handleWordClick },
    { word: "Hotel. ", ref: "Hotel. ", onClick: handleWordClick },
  ];

  const leftwords = [
    { word: "Farrari. ", ref: "Farrari ", onClick: handleWordClick },
    { word: "Vintage. ", ref: "Vintage ", onClick: handleWordClick },
    { word: "Uber. ", ref: "Uber ", onClick: handleWordClick },
    { word: "Bike. ", ref: "Bike ", onClick: handleWordClick },
    { word: "Walk. ", ref: "Walk ", onClick: handleWordClick },
    { word: "Jog. ", ref: "Jog ", onClick: handleWordClick },
  ];
  const rightwords = [
    { word: "The Gym. ", ref: "The Gym ", onClick: handleWordClick },
    { word: "On the water. ", ref: "On the water ", onClick: handleWordClick },
    { word: "Action. ", ref: "Action sport ", onClick: handleWordClick },
    { word: "Cricket. ", ref: "Cricket ", onClick: handleWordClick },
    { word: "Motorsport. ", ref: "Motorsport ", onClick: handleWordClick },
    { word: "Horses. ", ref: "Horses ", onClick: handleWordClick },
  ];


  return (
    <div className="text-border right-margin-desktop image-container">
        <div className={style.page}>
        {/* Clicked words */}
        <div className={style.clickedWords}>
      {clickedWords.map((word) => (
          <span key={word}>{word}</span>
        ))}
        </div>
    <div
      className={style.cubeContainer}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className={style.cube}
        ref={cubeRef}
        style={{
          transform: `rotateX(${cubeRotation.x}deg) rotateY(${cubeRotation.y}deg)`,
        }}
      >
        {/* FRONT FACE */}
        <div className={`${style.face} ${style.front}`}>
        {frontwords.map(({ word, ref, onClick }) => (
              <span
                key={ref}
                className={`${style.clickable} ${
                  Array.from(clickedWords).includes(ref) ? style.clicked : ""
                }`}
                onClick={() => onClick(ref)}
              >
                {word}
              </span>
            ))}
        </div>
        {/* BACK FACE */}
        <div className={`${style.face} ${style.back}`}>
        {backwords.map(({ word, ref, onClick }) => (
              <span
                key={ref}
                className={`${style.clickable} ${
                  Array.from(clickedWords).includes(ref) ? style.clicked : ""
                }`}
                onClick={() => onClick(ref)}
              >
                {word}
              </span>
            ))}
        </div>
        {/* TOP FACE */}
        <div className={`${style.face} ${style.top}`}>
        {topwords.map(({ word, ref, onClick }) => (
              <span
                key={ref}
                className={`${style.clickable} ${
                  Array.from(clickedWords).includes(ref) ? style.clicked : ""
                }`}
                onClick={() => onClick(ref)}
              >
                {word}
              </span>
            ))}
        </div>
        {/* BOTTOM FACE */}
        <div className={`${style.face} ${style.bottom}`}>
        {bottomwords.map(({ word, ref, onClick }) => (
              <span
                key={ref}
                className={`${style.clickable} ${
                  Array.from(clickedWords).includes(ref) ? style.clicked : ""
                }`}
                onClick={() => onClick(ref)}
              >
                {word}
              </span>
            ))}
        </div>
        {/* LEFT FACE */}
        <div id={style.left} className={`${style.face} ${style.left}`}>
        {leftwords.map(({ word, ref, onClick }) => (
              <span
                key={ref}
                className={`${style.clickable} ${
                  Array.from(clickedWords).includes(ref) ? style.clicked : ""
                }`}
                onClick={() => onClick(ref)}
              >
                {word}
              </span>
            ))}
        </div>
        {/* RIGHT FACE */}
        <div className={`${style.face} ${style.right}`}>
        {rightwords.map(({ word, ref, onClick }) => (
              <span
                key={ref}
                className={`${style.clickable} ${
                  Array.from(clickedWords).includes(ref) ? style.clicked : ""
                }`}
                onClick={() => onClick(ref)}
              >
                {word}
              </span>
            ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Cube;
