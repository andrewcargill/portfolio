import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "../../styles/Work.module.css";
import {
  faCrosshairs,
  faServer,
  faCode,
  faSquareUpRight,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faPython,
  faJsSquare,
  faReact,
  faInstagramSquare,
  faLinkedin,
  faGithubSquare,
  faSpotify,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import CustomBtn from "../../styles/CustomButton.module.css";
import AutoHeaderText from "./AutoHeaderText";

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
      {/* Gallery */}
      <div className={css.gallery}>
        {/* Text Component Container */}
        <div id={css.autoTextContainer} className={css.thumbnailWrapper}>
          {/* Text Component */}
          <div id={css.headerTextContainer}>
            <AutoHeaderText
              text="
          Welcome to my Portfolio. Take a look around.
          "
              maxFont="60px"
              minFont="15px"
              calFont="0.49"
              lineSpacing="1"
              containerId={css.autoTextContainer}
              textId={css.headerTextContainer}
              // calFont="1.2vh"
            />
          </div>
        </div>

        {/* Gallery mapping */}
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

                    {/* Icon Container */}
                    <div className={css.devIconContainer}>
                      <span class={css.tooltip}>
                        <FontAwesomeIcon icon={faBootstrap} />
                        <span class={css.tooltipText}>Bootstrap</span>
                      </span>

                      <span class={css.tooltip}>
                        <FontAwesomeIcon icon={faCss3Alt} />
                        <span class={css.tooltipText}>CSS</span>
                      </span>

                      <span class={css.tooltip}>
                        <FontAwesomeIcon icon={faHtml5} />
                        <span class={css.tooltipText}>HTML5</span>
                      </span>

                      <span class={css.tooltip}>
                        <FontAwesomeIcon icon={faReact} />
                        <span class={css.tooltipText}>React</span>
                      </span>

                      <span class={css.tooltip}>
                        <FontAwesomeIcon icon={faPython} />
                        <span class={css.tooltipText}>Python</span>
                      </span>

                      <span class={css.tooltip}>
                        <FontAwesomeIcon icon={faJsSquare} />
                        <span class={css.tooltipText}>Javascript</span>
                      </span>

                      <span class={css.tooltip}>
                        <FontAwesomeIcon icon={faServer} />
                        <span class={css.tooltipText}>Django</span>
                      </span>

                      <span class={css.tooltip}>
                        <FontAwesomeIcon icon={faCrosshairs} />
                        <span class={css.tooltipText}>UX Design</span>
                      </span>
                    </div>

                    {/* Button Container */}

                    {/* Single button */}
                    {image.buttons.length === 1 && (
                      <div className={css.highlightButtonContainer}>
                        <button
                          className={`fade-in-scale ${CustomBtn.subContentSingle}`}
                          onClick={() =>
                            image.buttons[0].type === "link"
                              ? handleClickSocial(image.buttons[0].url)
                              : navClick(image.buttons[0].url)
                          }
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
                            {image.buttons[0].icon === "code" && (
                              <FontAwesomeIcon icon={faLaptopCode} />
                            )}
                            {/* Button Label */}
                            {" " + image.buttons[0].label}
                          </div>
                        </button>
                      </div>
                    )}

                    {/* Multiple buttons */}
                    {image.buttons.length === 2 && (
                      <div className={css.highlightButtonContainer}>
                        <button
                          className={`fade-in-scale ${CustomBtn.subContent}`}
                          onClick={() =>
                            image.buttons[0].type === "link"
                              ? handleClickSocial(image.buttons[0].url)
                              : navClick(image.buttons[0].url)
                          }
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
                            {image.buttons[0].icon === "code" && (
                              <FontAwesomeIcon icon={faLaptopCode} />
                            )}
                            {/* Button Label */}
                            {" " + image.buttons[0].label}
                          </div>
                        </button>
                        <button
                          className={`fade-in-scale ${CustomBtn.subContent}`}
                          onClick={() =>
                            image.buttons[1].type === "link"
                              ? handleClickSocial(image.buttons[1].url)
                              : navClick(image.buttons[1].url)
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
                            {image.buttons[1].icon === "code" && (
                              <FontAwesomeIcon icon={faLaptopCode} />
                            )}
                            {/* Button Label */}
                            {" " + image.buttons[1].label}
                          </div>
                        </button>
                      </div>
                    )}
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
