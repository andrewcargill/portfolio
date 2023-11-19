import React, { useState, useEffect } from "react";

function AutoHeaderTextDemo({
  text,
  maxFont,
  minFont,
  calFont,
  containerId,
  textId,
  lineSpacing,
  onFontSizeChange,
  onContainerHeightChange,
  onContainerWidthChange,
}) {

  const [fontSize, setFontSize] = useState(1.8); // initial font size in vw units
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

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
      console.log(newFontSize);
      setFontSize(newFontSize);
      setContainerHeight(containerHeight);
      onFontSizeChange(newFontSize);
      onContainerHeightChange(containerHeight);
      onContainerWidthChange(containerWidth);

    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [containerId, textId, fontSize, lineSpacing, onFontSizeChange]);

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

AutoHeaderTextDemo.defaultProps = {
  containerId: "header-text-container",
  textId: "header-text-container-text",
  lineSpacing: 1.2,
  minFont: 20,
  maxFont: 50,
  calFont: 1,
};

export default AutoHeaderTextDemo;
