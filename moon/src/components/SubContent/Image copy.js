import React, { useState, useEffect } from "react";
import "../../styles/Image.css";

function Image({ images }) {
  const [index, setIndex] = useState(0);
  console.log("------------andy Line 6 {images}", { images });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="text-border right-margin-desktop image-container">
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