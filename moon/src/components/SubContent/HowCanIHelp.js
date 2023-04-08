import React from "react";
import styles from "../../styles/HowCanIHelp.module.css";
import image from "../../media/images/tutorials_thumbnail.png";

function HowCanIHelp({ video }) {
  return (
    <div className={styles.border}>
      <div className={styles.thumb}>
        <img src={image} alt="" />
      </div>
      <div className={styles.left}>
        <div className={styles.text}>
          Learn different things about coding and it's applications.
        </div>
        <div className={styles.text}>
          <button className={styles.helpButton}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default HowCanIHelp;
