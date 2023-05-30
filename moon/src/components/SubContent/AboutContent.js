import React, { useState, useEffect } from "react";
import css from "../../styles/About.module.css";
import backgroundImage from "../../media/images/forest.png"

function AboutContent() {

  return (

    /* THIS IS THE DIV WHERE THE BACKGROUnd image should appear */
    <div 
    id={css.page} 
    className="text-border right-margin-desktop image-container"
    
    >
      
      
        <div className={css.container}>
          
        <span className={`${css.line} ${css.black}`}>.  </span>
          <span
          className={css.line}
          
          > 
          I enjoy the nature
          </span>
          <span className={css.line}> I love exploring code </span>
          <span className={`${css.line} ${css.black}`}>.  </span>
          <span className={css.line}> I have a sawmill </span>
          <span className={css.line}> I play the guitar </span>
          <button className={`${css.line} ${css.black}`}>.  </button>
        </div>
   
    </div>
  );
}

export default AboutContent;
