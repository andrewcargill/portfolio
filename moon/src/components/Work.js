import React from "react";
import ImagePlaylist from "../media/images/MainImagePlaylist";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faArrowDown,
  faCheckSquare,
  faCoffee,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { faCodepen } from "@fortawesome/free-brands-svg-icons";

import AutoHeaderText from "./SubContent/AutoHeaderText";
import ImageGallery from "./SubContent/ImageGallery";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

function Work({ navClick }) {
  return (
    <div id="main-content">
      {/* Header Text Container*/}
      <div id="header-text" className="fade-in">
        {/* Auto Header Text Component */}
        <AutoHeaderText
          text="
          WORK!
          "
          maxFont="7vh"
          minFont="30px"
          calFont="2vw"
        />
      </div>

      {/* Half Page Content Container */}
      
        <ImageGallery images={ImagePlaylist} />
      
    </div>
  );
}

export default Work;
