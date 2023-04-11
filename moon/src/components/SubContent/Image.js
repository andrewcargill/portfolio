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
    <div className="text-border right-margin-desktop image-container">
      <div className="spinner-container">
        <div>
        <div className="spinner"> 
        </div>
        <div className="spinner"> 
        </div>
        </div>
        <div>
        <div className="spinner"> 
        </div>
        <div className="spinner"> 
        </div>
        </div>
      </div>
      <img
        id="main-pic"
        src={images[index].src}
        alt={images[index].alt}
        className="image-fade"
        key={images[index].src}
      />
    </div>
  );
}

export default Image;
