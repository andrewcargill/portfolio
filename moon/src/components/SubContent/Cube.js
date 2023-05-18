import React, { useState, useRef } from "react";
import style from "../../styles/Cube.module.css";

const Cube = () => {
  const [cubeRotation, setCubeRotation] = useState({ x: 0, y: 0 });
  const cubeRef = useRef(null);
  const touchStartRef = useRef(null);

  const handleMouseDown = (event) => {
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

  return (
    <div className="text-border right-margin-desktop image-container">
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
        <div className={`${style.face} ${style.front}`}>Front</div>
        <div className={`${style.face} ${style.back}`}>Back</div>
        <div className={`${style.face} ${style.top}`}>Top</div>
        <div className={`${style.face} ${style.bottom}`}>Bottom</div>
        <div className={`${style.face} ${style.left}`}>Left</div>
        <div className={`${style.face} ${style.right}`}>Right</div>
      </div>
    </div>
    </div>
  );
};

export default Cube;
