import React, { useState, useEffect } from "react";
import css from "../../styles/About.module.css";
import backgroundImage from "../../media/images/forest.png"

function AboutContent() {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  return (

    /* THIS IS THE DIV WHERE THE BACKGROUnd image should appear */
    <div 
    id={css.page} 
    className="text-border right-margin-desktop image-container"
    
    >
      {/* Background Image Div */}
      <div
        className={`${css.backgroundImage} ${hover ? css.show : ""}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
        <div className={css.container}>
          
        <span className={`${css.line} ${css.black}`}>.  </span>
          <button 
          className={css.line}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => {}}
          > 
          I enjoy the nature
          </button>
          <span className={css.line}> I love exploring code </span>
          <span className={`${css.line} ${css.black}`}>.  </span>
          <span className={css.line}> I have a sawmill </span>
          <span className={css.line}> I play the guitar </span>
          <span className={`${css.line} ${css.black}`}>.  </span>
        </div>
        {hover && <div className={css.backgroundImage} />}
    </div>
  );
}

export default AboutContent;
