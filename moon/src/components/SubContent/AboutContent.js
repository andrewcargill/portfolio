import React, { useState } from "react";
import css from "../../styles/About.module.css";

const spanTexts = {
  span1: "I studied Full Stack Engineering at The Code Institute.",
  span2: "I come from the UK and have a farm in the North of Sweden.",
  span3: "I have a background in Audio Engineering and music production. Programming is like the music world... but with a no horizon!",
  span4: "I really enjoy teaching and learning from others.",
  span5: "I have a passion for forestry and sustainable wood production.",
  span6: "Creating music and art is a strong interest I have had for many years.",
  span7: "Family and Creativity are the key to my personal happiness.",
};

function AboutContent() {
  const [infoText, setInfoText] = useState("");

  const handleMouseEnter = (spanId) => {
    setInfoText(spanTexts[spanId]);
  };

  const handleMouseLeave = () => {
    setInfoText("");
  };



  return (
    <div id={css.page} className="text-border right-margin-desktop image-container">
     
      <div className={css.infoReveal}>
        {infoText}
      </div>
      <div className={css.container}>
        <span
          id="span1"
          className={`${css.line} ${css.black}`}
          onMouseEnter={() => handleMouseEnter("span1")}
          onMouseLeave={handleMouseLeave}
          
        >
          .
        </span>
        <span
          id="span2"
          className={css.line}
          onMouseEnter={() => handleMouseEnter("span2")}
          onMouseLeave={handleMouseLeave}
        
        >
          I enjoy the nature
        </span>
        <span
          id="span3"
          className={css.line}
          onMouseEnter={() => handleMouseEnter("span3")}
          onMouseLeave={handleMouseLeave}
        
        >
          I love exploring code
        </span>
        <span
          id="span4"
          className={`${css.line} ${css.black}`}
          onMouseEnter={() => handleMouseEnter("span4")}
          onMouseLeave={handleMouseLeave}
        >
          .
        </span>
        <span
          id="span5"
          className={css.line}
          onMouseEnter={() => handleMouseEnter("span5")}
          onMouseLeave={handleMouseLeave}
  
        >
          I have a sawmill
        </span>
        <span
          id="span6"
          className={css.line}
          onMouseEnter={() => handleMouseEnter("span6")}
          onMouseLeave={handleMouseLeave}
   
        >
          I play the guitar
        </span>
        <button
          className={`${css.line} ${css.black}`}
          onMouseEnter={() => handleMouseEnter("span7")}
          onMouseLeave={handleMouseLeave}

        >
          .
        </button>
      </div>
    </div>
  );
}

export default AboutContent;
