import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "../../styles/Work.module.css";
import { faCode, faSquareUpRight } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagramSquare,
  faLinkedin,
  faGithubSquare,
  faSpotify,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import CustomBtn from "../../styles/CustomButton.module.css";

function ImageGallery({ images, navClick }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClickSocial = (url) => {
    window.open(url);
  };

  return (
    <div className={`${css.border} right-margin-desktop`}>
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
                /* IMAGE HIGHLIGHT START */
                <div className={css.caption}>
                  {/* All info container */}
                  <div className={css.highlightContainer}>
                    {/*  Hightlight container*/}
                    <div className={css.highlightText}>{image.highlight}</div>
                    {/* Button Container */}

                    <div className={css.highlightButtonContainer}>
                      {/* Single button */}
                      {image.buttons.length === 1 && (
                        <button
                          className={`fade-in-scale ${CustomBtn.subContentSingle}`}
                          onClick={() => navClick(image.buttons[0].url)}
                        >
                          <div id="buy-basket">
                            {/* Button Icon */}
                            {image.buttons[0].icon === "github" && (
                              <FontAwesomeIcon icon={faGithubSquare} />
                            )}
                            {image.buttons[0].icon === "codepen" && (
                              <FontAwesomeIcon icon={faCodepen} />
                            )}
                            {image.buttons[0].icon === "link" && (
                              <FontAwesomeIcon icon={faSquareUpRight} />
                            )}
                            {/* Button Label */}
                            {image.buttons[0].label}
                          </div>
                        </button>
                      )}

                      {/* Multiple buttons */}
                      {image.buttons.length === 2 && (
                        <div>
                          <button
                            className={`fade-in-scale ${CustomBtn.subContent}`}
                            onClick={() => navClick(image.buttons[0].url)}
                          >
                            <div id="buy-basket">
                               {/* Button Icon */}
                            {image.buttons[0].icon === "github" && (
                              <FontAwesomeIcon icon={faGithubSquare} />
                            )}
                            {image.buttons[0].icon === "codepen" && (
                              <FontAwesomeIcon icon={faCodepen} />
                            )}
                            {image.buttons[0].icon === "link" && (
                              <FontAwesomeIcon icon={faSquareUpRight} />
                            )}
                              {/* Button Label */}
                              {image.buttons[0].label}
                            </div>
                          </button>
                          <button
                            className={`fade-in-scale ${CustomBtn.subContent}`}
                            onClick={() =>
                              handleClickSocial(image.buttons[1].url)
                            }
                          >
                            <div id="buy-basket">
                               {/* Button Icon */}
                            {image.buttons[1].icon === "github" && (
                              <FontAwesomeIcon icon={faGithubSquare} />
                            )}
                            {image.buttons[1].icon === "codepen" && (
                              <FontAwesomeIcon icon={faCodepen} />
                            )}
                            {image.buttons[1].icon === "link" && (
                              <FontAwesomeIcon icon={faSquareUpRight} />
                            )}
                              {/* Button Label */}
                              {image.buttons[1].label}
                            </div>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                /* IMAGE HIGHLIGHT END */
              )}
            </div>
            <img src={image.src} alt={image.alt} className={css.thumbnail} />
            <div
              className={`${css.title} ${
                hoveredIndex === index ? css.hideCaption : ""
              }`}
              style={{
                transition: "opacity 0.9s ease",
                opacity: hoveredIndex === index ? 0 : 1,
              }}
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
