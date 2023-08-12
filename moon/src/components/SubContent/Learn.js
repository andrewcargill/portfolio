import React from "react";
import styles from "../../styles/Learn.module.css";
import image from "../../media/images/tutorials_thumbnail.png";
import AutoHeaderText from "./AutoHeaderText";
import { useNavigate } from 'react-router-dom';

function Learn(props) {
  console.log("Learn props:", props.navSubClick);

  // const navClick = (value) => {
  //   props.navSubClick(value);
  // };

  const navigate = useNavigate();

  const handleNavClick = (page) => {
    navigate(page);
  }

  return (
    <div className={styles.border}>
      {/* <div className={styles.thumb}> */}
      <div className="image-container-learn">
        <img src={image} alt="" />
      </div>
      {/* </div> */}
      <div className={styles.leftContainer}>
        <div id={styles.left}>
          <div id={styles.text}>
            <AutoHeaderText
              text="HTML | CSS | Javascript | Scratch"
              maxFont="8px"
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
