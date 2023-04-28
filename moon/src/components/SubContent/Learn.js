import React from "react";
import styles from "../../styles/Learn.module.css";
import image from "../../media/images/tutorials_thumbnail.png";
import AutoHeaderText from "./AutoHeaderText";

function Learn(props) {
  console.log('Learn props:', props.navSubClick);

  const navClick = (value) => {
    props.navSubClick(value);
    
  };

  return (
    <div className={styles.border}>
      {/* <div className={styles.thumb}> */}
        <div className="image-container-learn">
        <img src={image} alt="" />
        </div>
      {/* </div> */}
      <div id={styles.left}>
        <div id={styles.text}>
        <AutoHeaderText
        text="HTML | CSS | Javascript | Scratch"
        maxFont="10px"
        minFont="10px"
        containerId={styles.left}
        textId={styles.text}
        calFont="0.3"
        lineSpacing="1"
      />

          
        </div>
        <div className={styles.text}>
          <button className={styles.helpButton} onClick={() => navClick("tuition")}>Boom!</button>
        </div>
      </div>
    </div>
  );
}

export default 
Learn;
