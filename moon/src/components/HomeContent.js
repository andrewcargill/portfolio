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
          <HeaderText />
          {/* Action Section */}
          <ContactSubContent navSubClick={navClick}/>
          {/* Sub info - Video */}
          <BottomText video={video} />
          {/* Main image */}
          <Image test={test} />
        </div>
    );
}

export default HomeContent;
