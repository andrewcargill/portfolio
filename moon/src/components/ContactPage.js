import React from "react";
import css from "../styles/ConactPage.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import test from "../media/images/false.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowDown,
  faCheckSquare,
  faCoffee,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import AutoHeaderText from "./SubContent/AutoHeaderText";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

function ContactPage({ navClick }) {
  return (
    <div id="main-content-container">
      {/* Header Text Container */}
      <div id={css.AutoHeaderContainer} className="fade-in">
        {/* Auto Header Text Component */}
        <AutoHeaderText
          text="
          Contact ME! Go on! Go On!.
          "
          maxFont="3vh"
          minFont="15px"
          calFont="1.2vw"
          containerId={css.AutoHeaderContainer}
        />
      </div>

      {/* Main image */}
      <div className={css.halfPageContainer}>
        <div className={css.border}>
          <img id="main-pic" src={test} alt="Logo" />
        </div>
      </div>

      {/* Main image */}
      <div className={css.halfPageContainer}>
        <div className={css.border}>
          <img id="main-pic" src={test} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
