import React from "react";
import styles from "../../styles/HowCanIHelp.module.css";
import image from "../../media/images/tutorials_thumbnail.png";

function HowCanIHelp({ video }) {
  return (
    <div className={styles.border}>
      {/* <div className={styles.thumb}> */}
        <div className="image-container-learn">
        <img src={image} alt="" />
        </div>
      {/* </div> */}
      <div className={styles.left}>
        <div className={styles.text}>
          Resources. ReactJS Components. Lessons for teaching code to students and more!
        </div>
        <div className={styles.text}>
          <button className={styles.helpButton}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default HowCanIHelp;
