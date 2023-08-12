import React, { useState, useEffect } from "react";

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
      let RawFontSize = Math.sqrt(containerArea / textLength) * 2.5;
      let newFontSize = 0;
      newFontSize = RawFontSize * calFont;
     
      setFontSize(newFontSize);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [containerId, textId, fontSize, lineSpacing]);

  return (
    <div>
      <div className="content-no-background left-margin-desktop" id={textId}>
        {text} 
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
