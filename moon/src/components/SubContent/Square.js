import React, { useState, useRef } from "react";
import style from "../../styles/Square.module.css";

const Square = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 55, y: 55 });
  const circleRef = useRef(null);
  const touchStartRef = useRef(null);

  const handleMouseDown = (event) => {
    event.preventDefault();
    const { clientX, clientY } = event;
    const { left, top } = circleRef.current.getBoundingClientRect();
    const offsetX = clientX - left;
    const offsetY = clientY - top;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    setCirclePosition({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const squareRect = circleRef.current.parentNode.getBoundingClientRect();
    const offsetX = clientX - squareRect.left;
    const offsetY = clientY - squareRect.top;

    if (offsetX >= 0 && offsetX <= squareRect.width && offsetY >= 0 && offsetY <= squareRect.height) {
      setCirclePosition({ x: offsetX, y: offsetY });
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    const { clientX, clientY } = touch;
    const squareRect = circleRef.current.parentNode.getBoundingClientRect();
    const offsetX = clientX - squareRect.left;
    const offsetY = clientY - squareRect.top;

    touchStartRef.current = { offsetX, offsetY };
  };

  const handleTouchMove = (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    const { clientX, clientY } = touch;
    const squareRect = circleRef.current.parentNode.getBoundingClientRect();
    const offsetX = clientX - squareRect.left;
    const offsetY = clientY - squareRect.top;

    if (offsetX >= 0 && offsetX <= squareRect.width && offsetY >= 0 && offsetY <= squareRect.height) {
      setCirclePosition({ x: offsetX, y: offsetY });
    }
  };

  return (
    <div className={style.square} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <div
        className={style.circle}
        ref={circleRef}
        style={{ transform: `translate(${circlePosition.x - 20}px, ${circlePosition.y - 20}px)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      />
    </div>
  );
};

export default Square;
