import React from "react";
import styles from "../../styles/Learn.module.css";
import image from "../../media/images/tutorials_thumbnail.png";

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
      <div className={styles.left}>
        <div className={styles.text}>
          HTML | CSS | Javascript | Scratch
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
