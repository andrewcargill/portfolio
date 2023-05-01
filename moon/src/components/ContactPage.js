import React from "react";
import styles from "../styles/ConactPage.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import phone from "../media/images/phone.png";


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
    <div id={styles.mainContentContainer}>
      {/* Header Text Container */}
      
      {/* Main image */}
      <div className={styles.halfPageContainer1}>
        <div className={styles.border}>
          <img id="main-pic" src={phone} alt="red phone" />
        </div>
      </div>

      {/* Main image */}
      <div className={styles.halfPageContainer2}>
        <div className={styles.border}>
        <div id={styles.contactText}>
         
        <AutoHeaderText 
             text="
             Lets have a chat! You can reach me via my social media below.
             "
             containerId={styles.contactText}
             textId={styles.text}
             maxFont="25px"
             minFont="15px"
             calFont=".45"
             lineSpacing="1"
          />
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
