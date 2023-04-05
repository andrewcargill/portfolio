import React, { useState, useEffect } from "react";
import "../../styles/Image.css";

function Image2({ images }) {
  const [index, setIndex] = useState(0);
  console.log('------------andy Line 6 {images}', {images});
  
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
          key={images[index]}
        />
      </div>
    </div>
  );
}

export default Image2;
