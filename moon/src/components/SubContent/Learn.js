import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../../styles/Learn.module.css";
import image from "../../media/images/tutorials_thumbnail.png";
import AutoHeaderText from "./AutoHeaderText";

function Learn() {
  const navigate = useNavigate();

  const handleNavClick = (page) => {
    navigate(page);
  }

  return (
    <div className={styles.border}>

      <div className="image-container-learn">
        <img src={image} alt="" />
      </div>

      <div className={styles.leftContainer}>
        <div id={styles.left}>
          <div id={styles.text}>
            <AutoHeaderText
              text="Interactive Learning"
              maxFont="6px"
              minFont="30px"
              containerId={styles.left}
              textId={styles.text}
              calFont="0.45"
              lineSpacing="1"
            />
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button
            className={styles.helpButton}
            onClick={() => handleNavClick("/tutorials")}
          >
            Boom!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Learn;
