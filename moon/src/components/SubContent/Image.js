import React, { useState, useEffect } from "react";
import "../../styles/Image.css";
import { useNavigate } from "react-router-dom";

function Image({ images }) {
  const [index, setIndex] = useState(0);
    const navigate = useNavigate();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 12000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick = () => {
    navigate("/portfolio");
  };
  
  return (
    <div className="text-border right-margin-desktop image-container" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="spinner-container">
        <div>
        <div className="spinner"> 
        </div>
        <div className="spinner"> 
        </div>
        </div>
        <div>
        <div id="clear-spinner" className="spinner"> 
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
