import React, { useState, useRef } from "react";
import style from "../../styles/Square.module.css";

const Square = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 55, y: 55 });
  const [isDragging, setIsDragging] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const circleRef = useRef(null);
  const touchStartRef = useRef(null);
  const offset = isDragging ? 140 : 0; // Adjust the offset value as needed

  const handleMouseDown = (event) => {
    event.preventDefault();
    const { clientX, clientY } = event;
    const { left, top } = circleRef.current.getBoundingClientRect();
    const offsetX = clientX - left;
    const offsetY = clientY - top;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    setCirclePosition({ x: offsetX, y: offsetY });
    setIsClicked(false);
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const squareRect = circleRef.current.parentNode.getBoundingClientRect();
    const offsetX = clientX - squareRect.left;
    const offsetY = clientY - squareRect.top;

    if (offsetX >= 0 && offsetX <= squareRect.width && offsetY >= 0 && offsetY <= squareRect.height) {
      if (isDragging) {
        setCirclePosition({ x: offsetX, y: offsetY });
      }
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    setIsDragging(false);
  };

  const handleTouchStart = (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    const { clientX, clientY } = touch;
    const squareRect = circleRef.current.parentNode.getBoundingClientRect();
    const offsetX = clientX - squareRect.left;
    const offsetY = clientY - squareRect.top;

    touchStartRef.current = { offsetX, offsetY };
    setIsClicked(false);
  };

  const handleTouchMove = (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    const { clientX, clientY } = touch;
    const squareRect = circleRef.current.parentNode.getBoundingClientRect();
    const offsetX = clientX - squareRect.left;
    const offsetY = clientY - squareRect.top;

    if (offsetX >= 0 && offsetX <= squareRect.width && offsetY >= 0 && offsetY <= squareRect.height) {
      if (isDragging) {
        setCirclePosition({ x: offsetX, y: offsetY });
      }
    }
  };

  const handleCircleClick = () => {
    setIsDragging(true);
    setIsClicked(true);
  };

  return (
    <div className={style.square} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <div
        className={`${style.circle} ${isDragging ? style.dragging : ""} ${isClicked ? style.clicked : ""}`}
        ref={circleRef}
        style={{ transform: `translate(${circlePosition.x - offset}px, ${circlePosition.y - offset}px)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onClick={handleCircleClick}
      />
    </div>
  );
};

export default Square;
