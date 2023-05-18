import React, { useState, useEffect } from "react";
import style from "../../styles/CubeGame.module.css";

const CubeGame = () => {
  const [cubeRotationX, setCubeRotationX] = useState(30);
  const [cubeRotationY, setCubeRotationY] = useState(30);
  const [clickedWords, setClickedWords] = useState([]);
  const [clickedWordsBlack, setClickedWordsBlack] = useState([]);

  const handleCubeMouseDown = (event) => {
    event.preventDefault();
    document.addEventListener("mousemove", onCubeMove);
    document.addEventListener("mouseup", onCubeUp);
  };

  const onCubeMove = (event) => {
    const deltaX = event.movementX;
    const deltaY = event.movementY;
    setCubeRotationX((prevRotationX) => prevRotationX + deltaY);
    setCubeRotationY((prevRotationY) => prevRotationY + deltaX);
  };

  const onCubeUp = () => {
    document.removeEventListener("mousemove", onCubeMove);
    document.removeEventListener("mouseup", onCubeUp);
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

  const handleWordBlackClick = (word) => {
    if (clickedWordsBlack.includes(word)) {
      setClickedWordsBlack((prevClickedWordsBlack) =>
        prevClickedWordsBlack.filter((clickedWord) => clickedWord !== word)
      );
    } else {
      setClickedWordsBlack((prevClickedWordsBlack) => [
        ...prevClickedWordsBlack,
        word,
      ]);
    }
  };

  const frontwords = [
    { word: "Test. ", ref: "Test ", onClick: handleWordClick },
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
            onTouchStart={handleCubeMouseDown}
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
