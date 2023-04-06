import React, { useState, useEffect } from "react";
import css from "../../styles/Work.module.css";

function ImageGallery({ images }) {
  return (
    <div id="half-page-container" className="slide-right">
      <div className={`${css.border} right-margin-desktop image-container`}>

      {/* <div className="gallery-text-border right-margin-desktop image-container"> */}
        <div className={css.gallery}>
          {images.map((image, index) => (
            <div key={index} className={css.thumbnailWrapper}>
              <div className={css.thumbnailOverlay}>
                <p className={css.caption}>{image.highlight}</p>
              </div>
              <img
                src={image.src}
                alt={image.alt}
                className={css.thumbnail}
              />
              <div className={css.title}>{image.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
