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
    { word: "Work. ", ref: "Test ", onClick: handleWordClick },
    { word: "Test2. ", ref: "Test2 ", onClick: handleWordClick },
    { word: "Apple. ", ref: "Apple ", onClick: handleWordClick },
    { word: "Cleo. ", ref: "Cleo ", onClick: handleWordClick },
    { word: "Music. ", ref: "Music ", onClick: handleWordClick },
    { word: "Sail. ", ref: "Sail ", onClick: handleWordClick },
    { word: "Izzie. ", ref: "Izzie ", onClick: handleWordClick },
    { word: "Farm. ", ref: "Farm ", onClick: handleWordClick },
    
  ];

  const backwords = [
    { word: "Monday. ", ref: "Monday ", onClick: handleWordClick },
    { word: "Tuesday. ", ref: "Tuesday ", onClick: handleWordClick },
    { word: "Wednesday. ", ref: "Wednesday ", onClick: handleWordClick },
    { word: "Thursday. ", ref: "Thursday ", onClick: handleWordClick },
    { word: "Friday. ", ref: "Friday ", onClick: handleWordClick },
    { word: "Saturday. ", ref: "Saturday ", onClick: handleWordClick },
  
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
        <div className={`${style.face} ${style.top}`}>Top</div>
        <div className={`${style.face} ${style.bottom}`}>Bottom</div>
        <div className={`${style.face} ${style.left}`}>Left</div>
        <div className={`${style.face} ${style.right}`}>Right</div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Cube;
