import React, { useState, useEffect } from "react";
import css from "../../styles/About.module.css";

function AboutContent({ images }) {
  return (
    <div id={css.page} className="text-border right-margin-desktop image-container">
      <div className={css.page}>
        <div className={css.container}>
          
        <span className={`${css.line} ${css.black}`}>.  </span>
          <span className={css.line}> I enjoy the nature </span>
          <span className={css.line}> I love exploring code </span>
          <span className={`${css.line} ${css.black}`}>.  </span>
          <span className={css.line}> I have a sawmill </span>
          <span className={css.line}> I play the guitar </span>
          <span className={`${css.line} ${css.black}`}>.  </span>
          



        </div>
        </div>
    </div>
  );
}

export default AboutContent;
