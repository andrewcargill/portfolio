import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AutoHeaderText({ text, maxFont, minFont, calFont, containerId, textId }) {
  const [fontSize, setFontSize] = useState(1.8); // initial font size in vw units

  useEffect(() => {
    // adjust font size on window resize
    const handleResize = () => {
      const containerHeight = document.getElementById(containerId).offsetHeight;
      const containerWidth = document.getElementById(containerId).offsetWidth;
      const textHeight = document.getElementById(textId).offsetHeight;
      const textWidth = document.getElementById(textId).offsetWidth;
      const newFontSize = Math.min(containerHeight / textHeight, containerWidth / textWidth) * 1.8;
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
