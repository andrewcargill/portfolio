import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AutoHeaderText({
  text,
  maxFont,
  minFont,
  calFont,
  containerId,
  textId,
  lineSpacing,
}) {
  const [fontSize, setFontSize] = useState(1.8); // initial font size in vw units

  useEffect(() => {
    // adjust font size on window resize
    const handleResize = () => {
      
      const container = document.getElementById(containerId);
      const textEl = document.getElementById(textId);
      const containerHeight = container.offsetHeight;
      const containerWidth = container.offsetWidth;
      const containerArea = containerHeight * containerWidth;
      const textLength = text.length + (lineSpacing * 2) + 10;
      // const textHeight = (textLength * fontSize) / containerWidth;
      // const textWidth = containerWidth / fontSize;
      // const textArea = textHeight * textLength;
      let RawFontSize = Math.sqrt(containerArea / textLength) * 2.5;
      let newFontSize = 0;
      // newFontSize = Math.min(newFontSize, maxFont);
      // newFontSize = Math.max(newFontSize, minFont);
      newFontSize = RawFontSize * calFont;
      console.log(`
Container dimensions:
height: ${containerHeight}px
width: ${containerWidth}px
area: ${containerHeight * containerWidth}px

Text dimensions:
length: ${textLength}
line spacing: ${lineSpacing}px


newFontSize: ${newFontSize}
`);
      setFontSize(newFontSize);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // call once initially to set the font size
    return () => window.removeEventListener("resize", handleResize);
  }, [containerId, textId, fontSize, lineSpacing]);

  return (
    <div>
      <div className="content-no-background left-margin-desktop" id={textId}>
        {text} <FontAwesomeIcon icon="arrow-down" /> <FontAwesomeIcon icon="arrow-down" />{" "}
        <FontAwesomeIcon icon="arrow-down" />
      </div>
      <style>{`
        #${containerId} {
          font-size: ${fontSize}px;
        }
      `}</style>
    </div>
  );
}

AutoHeaderText.defaultProps = {
  containerId: "header-text-container",
  textId: "header-text-container-text",
  lineSpacing: 1.2,
  minFont: 20,
  maxFont: 50,
  calFont: 1,
};

export default AutoHeaderText;
