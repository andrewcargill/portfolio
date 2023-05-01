import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";

function AutoHeaderText({ text, maxFont, minFont, calFont, containerId, textId }) {
  const [fontSize, setFontSize] = useState(1.8); // initial font size in vw units

  useEffect(() => {
    // adjust font size on window resize
    const handleResize = () => {
      const container = document.getElementById(containerId);
      const textEl = document.getElementById(textId);
      const containerHeight = container.offsetHeight;
      const containerWidth = container.offsetWidth;
      const textHeight = textEl.offsetHeight;
      const textWidth = textEl.offsetWidth;
      const containerAspectRatio = containerWidth / containerHeight;
      const textAspectRatio = textWidth / textHeight;
      console.log(containerId);
      let newFontSize;
      if (containerAspectRatio >= textAspectRatio) {
        newFontSize = Math.min(containerHeight / textHeight, containerWidth / textWidth) * 1.3;
      } else {
        newFontSize = Math.min(containerHeight / textWidth * textAspectRatio, containerWidth / textHeight / textAspectRatio) * 20;
        // newFontSize = Math.min(containerHeight / textWidth * textAspectRatio, containerWidth / textHeight / textAspectRatio) * 1.8;
      }
      setFontSize(newFontSize);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // call once initially to set the font size
    return () => window.removeEventListener("resize", handleResize);
  }, [containerId, textId]);

  return (
    <div>
      <div className="content-no-background left-margin-desktop" id={textId}>
        {text} <FontAwesomeIcon icon="arrow-down" /> <FontAwesomeIcon icon="arrow-down" />{" "}
        <FontAwesomeIcon icon="arrow-down" />
      </div>
      <style>{`
        #${containerId} {
          font-size: min(max(${minFont}, calc(${calFont} * ${fontSize})), ${maxFont});
        }
      `}</style>
    </div>
  );
}

AutoHeaderText.defaultProps = {
  containerId: "header-text-container",
  textId: "header-text-container-text"
};

export default AutoHeaderText;
