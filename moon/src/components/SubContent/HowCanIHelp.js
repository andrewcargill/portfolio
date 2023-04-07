import React from "react";
import styles from "../../styles/HowCanIHelp.module.css";
import image from "../../media/images/tutorials_thumbnail.png"

function HowCanIHelp({ video }) {
  return (
    <div className={styles.border}>
      
      
        <div className={image}>
        <img src={image} alt="" />
        
      </div>
      <div></div>
    </div>
  );
}

export default HowCanIHelp;
