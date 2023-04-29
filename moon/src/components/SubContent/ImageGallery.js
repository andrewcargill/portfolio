import React, { useState } from "react";
import css from "../../styles/Work.module.css";

function ImageGallery({ images }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={`${css.border} right-margin-desktop image-container`}>
      <div className={css.gallery}>
        {images.map((image, index) => (
          <div
            key={index}
            className={css.thumbnailWrapper}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={css.thumbnailOverlay}>
              {hoveredIndex === index && (
                <p className={css.caption}>{image.highlight}</p>
              )}
            </div>
            <img
              src={image.src}
              alt={image.alt}
              className={css.thumbnail}
            />
            <div
              className={`${css.title} ${
                hoveredIndex === index ? css.hideCaption : ""
              }`}
            >
              {image.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
