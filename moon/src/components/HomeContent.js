import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import test from "../media/images/false.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import video from "../media/video/advert.mp4";
import {
  faArrowDown,
  faCheckSquare,
  faCoffee,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import {
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactSubContent from "./SubContent/ContactSubContent";
import HeaderText from "./SubContent/HeaderText";
import BottomText from "./SubContent/BottomText";
import Image from "./SubContent/Image";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

function HomeContent({ navClick }) {

    return(
         <div id="main-content">
          <HeaderText text="
          Welcome to my world where creativity and technology collide. I am a
          full-stack engineer with a background in media, art and teaching. So
          step into my world, and let's explore the endless possibilities
          together.
          "/>
          {/* Action Section */}
          <ContactSubContent navSubClick={navClick} text="Looking for some tuition or a new website?"/>
          {/* Sub info - Video */}
          <BottomText video={video} />
          {/* Main image */}
          <Image test={test} />
        </div>
    );
}

export default HomeContent;
