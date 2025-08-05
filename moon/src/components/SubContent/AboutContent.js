import React, { useState } from "react";
import css from "../../styles/About.module.css";

const spanTexts = {
  span7: "Born in the UK, raised with music and tools in hand.",
  span6: "Built treehouses, played guitar, and got curious about how things work.",
  span5: "Trained in audio engineering and became a professional musician.",
  span4: "Founded a music production and education company — ran it for 12 years.",
  span3: "Moved to Sweden over a decade ago — found peace in nature and the forest.",
  span2: "Studied Full Stack Software Engineering in Scotland and at The Code Institute.",
  span1: "I'm exploring how creative code can solve everyday problems.",
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
          className={`${css.line} `}
          onMouseEnter={() => handleMouseEnter("span1")}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "default", userSelect: "none" }}
          
        >
          Digital
        </span>
        <span
          id="span2"
             className={`${css.line} ${css.black}`}
          onMouseEnter={() => handleMouseEnter("span2")}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "default", userSelect: "none" }}
        
        >
        GPT-3
        </span>
        <span
          id="span3"
             className={`${css.line} ${css.black}`}
          onMouseEnter={() => handleMouseEnter("span3")}
          onMouseLeave={handleMouseLeave}
        style={{ cursor: "default", userSelect: "none" }}
        
        >
         Cloud Computing
        </span>
        <span
          id="span4"
          className={`${css.line} ${css.black}`}
          onMouseEnter={() => handleMouseEnter("span4")}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "default", userSelect: "none" }}
        >
          iPhone
        </span>
        <span
          id="span5"
            className={`${css.line}  ${css.black}`}
          onMouseEnter={() => handleMouseEnter("span5")}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "default", userSelect: "none" }}
  
        >
          Apple Mac
        </span>
        <span
          id="span6"
           className={`${css.line} ${css.black}`}
          onMouseEnter={() => handleMouseEnter("span6")}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "default", userSelect: "none" }}
   
        >
          ZX81
        </span>
         <span
          id="span7"
            className={`${css.line} `}
          onMouseEnter={() => handleMouseEnter("span7")}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "default", userSelect: "none" }}
  
        >
       Analogue
        </span>
    
      </div>
    </div>
  );
}

export default AboutContent;
