import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ImagePlaylist from "../media/images/MainImagePlaylist";
import { library } from "@fortawesome/fontawesome-svg-core";
import video from "../media/video/advert.mp4";
import {
  faArrowDown,
  faCheckSquare,
  faCoffee,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import ContactSubContent from "./SubContent/ContactSubContent";
import Image from "./SubContent/Image";
import AutoHeaderText from "./SubContent/AutoHeaderText";
import Learn from "./SubContent/Learn";
import ImageGallery from "./SubContent/ImageGallery";
import styles from "../styles/Work.module.css";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

function Work({ navClick }) {
  return (
    <div id={styles.mainContentContainer}>
      

      {/* Half Page Content Container */}
      <div id={styles.container} className="slide-right">
        {/* Image Component */}

        <ImageGallery images={ImagePlaylist} navClick={navClick} />
      </div>
    </div>
  );
}

export default Work;
