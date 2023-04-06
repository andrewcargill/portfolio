import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import test from "../media/images/false.png";
import test2 from "../media/images/image001.PNG";
import test3 from "../media/images/pic.jpg";
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactSubContent from "./SubContent/ContactSubContent";
import HeaderText from "./SubContent/HeaderText";
import BottomText from "./SubContent/BottomText";
import Image from "./SubContent/Image";
import AutoHeaderText from "./SubContent/AutoHeaderText";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

function HomeContent({ navClick }) {
  const allImages = [
    require("../media/images/false.png"),
    require("../media/images/pic.jpg"),
    require("../media/images/image001.PNG"),
  ];

  return (
    <div id="main-content">
      {/* Header Text Container*/}
      <div id="header-text" className="fade-in">
        {/* Auto Header Text Component */}
        <AutoHeaderText
          text="
          Welcome to my world where creativity and technology collide. I am a
          full-stack engineer with a background in media, art and teaching. So
          step into my world, and let's explore the endless possibilities
          together.
          "
          maxFont="3vh"
          minFont="15px"
          calFont="1.2vw"
        />
      </div>

      {/* Sub-Section Container Top */}
      <div id="action-button" className="slide-left">
        {/* Contact Button Component */}
        <ContactSubContent
          navSubClick={navClick}
          text="Looking for some tuition or a new website?"
        />
      </div>

      {/* Sub-Section Container Bottom */}
      <div id="bottom-text" className="slide-up">
        {/* Sub-Section Video Component */}
        <BottomText video={video} />
      </div>

      {/* Half Page Content Container */}
      <div id="image" className="slide-right">
        {/* Image Component */}
        <Image images={ImagePlaylist} />
      </div>
    </div>
  );
}

export default HomeContent;
