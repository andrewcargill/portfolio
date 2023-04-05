import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AutoHeaderText({ text, maxFont, minFont, calFont}) {
    console.log('------------andy Line 5 maxFont', text);
    
  const [fontSize, setFontSize] = useState(1.8); // initial font size in vw units

  useEffect(() => {
    // adjust font size on window resize
    const handleResize = () => {
      const containerHeight = document.getElementById("header-text").offsetHeight;
      const containerWidth = document.getElementById("header-text").offsetWidth;
      const textHeight = document.getElementById("header-text-text").offsetHeight;
      const textWidth = document.getElementById("header-text-text").offsetWidth;
      const newFontSize = Math.min(containerHeight / textHeight, containerWidth / textWidth) * 1.8;
      setFontSize(newFontSize);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // call once initially to set the font size
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="header-text" className="fade-in">
      <div className="content-no-background left-margin-desktop" id="header-text-text">
        {text} <FontAwesomeIcon icon="arrow-down" /> <FontAwesomeIcon icon="arrow-down" />{" "}
        <FontAwesomeIcon icon="arrow-down" />
      </div>
      <style>{`
        #header-text {
          
          font-size: min(max(${minFont}, calc(${calFont} * ${fontSize})), ${maxFont});
        }
      `}</style>
    </div>
  );
}

export default AutoHeaderText;
