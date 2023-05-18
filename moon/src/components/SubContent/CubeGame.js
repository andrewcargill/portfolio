import React, { useState, useEffect, useRef } from "react";
import style from "../../styles/CubeGame.module.css";

const CubeGame = () => {
  const [cubeRotationX, setCubeRotationX] = useState(30);
  const [cubeRotationY, setCubeRotationY] = useState(30);
  const [clickedWords, setClickedWords] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const previousMouseRef = useRef({ x: 0, y: 0 });

  const handleCubeMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    previousMouseRef.current = {
      x: event.clientX || event.touches[0].clientX,
      y: event.clientY || event.touches[0].clientY,
    };
    document.addEventListener("mousemove", handleCubeMouseMove);
    document.addEventListener("touchmove", handleCubeTouchMove, {
      passive: false,
    });
    document.addEventListener("mouseup", handleCubeMouseUp);
    document.addEventListener("touchend", handleCubeTouchEnd);
  };

  const handleCubeMouseMove = (event) => {
    if (!isDragging) return;
    const { x, y } = previousMouseRef.current;
    const deltaX = event.clientX - x;
    const deltaY = event.clientY - y;
    setCubeRotationX((prevRotationX) => prevRotationX + deltaY);
    setCubeRotationY((prevRotationY) => prevRotationY + deltaX);
    previousMouseRef.current = { x: event.clientX, y: event.clientY };
  };

  const handleCubeTouchMove = (event) => {
    if (!isDragging) return;
    const { x, y } = previousMouseRef.current;
    const deltaX = event.touches[0].clientX - x;
    const deltaY = event.touches[0].clientY - y;
    setCubeRotationX((prevRotationX) => prevRotationX + deltaY);
    setCubeRotationY((prevRotationY) => prevRotationY + deltaX);
    previousMouseRef.current = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
  };

  const handleCubeMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleCubeMouseMove);
    document.removeEventListener("touchmove", handleCubeTouchMove);
    document.removeEventListener("mouseup", handleCubeMouseUp);
    document.removeEventListener("touchend", handleCubeTouchEnd);
  };

  const handleCubeTouchEnd = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleCubeMouseMove);
    document.removeEventListener("touchmove", handleCubeTouchMove);
    document.removeEventListener("mouseup", handleCubeMouseUp);
    document.removeEventListener("touchend", handleCubeTouchEnd);
  };

  const handleWordClick = (word) => {
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
    // Add more words as needed
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


        <div id={style.container}>
          <div
            id={style.cube}
            
            onMouseDown={handleCubeMouseDown}
            style={{
              transform: `rotateX(${cubeRotationX}deg) rotateY(${cubeRotationY}deg)`,
            }}
          >
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
            <div className={`${style.face} ${style.back}`}></div>
            <div className={`${style.face} ${style.top}`}></div>
            <div className={`${style.face} ${style.bottom}`}></div>
            <div
              id={style.left}
              className={`${style.face} ${style.left}`}
            ></div>
            <div className={`${style.face} ${style.right}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CubeGame;
