import React, { useState, useEffect } from "react";
import "../../styles/Image.css";

function Image({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="image" className="slide-right">
      <div className="text-border right-margin-desktop image-container">
        <img
          id="main-pic"
          src={images[index]}
          alt="Slide"
          className="image-fade"
        />
      </div>
    </div>
  );
}

export default Image;
