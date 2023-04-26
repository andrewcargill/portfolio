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
import ContactForm from "./SubContent/ContactForm";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

function ContactPage({ navClick }) {
  return (
    <div id={css.mainContentContainer}>
      {/* Header Text Container */}
      <div id={css.AutoHeaderContainer} className="fade-in">
        {/* Auto Header Text Component */}
        <AutoHeaderText
          text="
          Contact ME! Go on! Go On!.
          "
          maxFont="100px"
          minFont="15px"
          calFont="30px"
          containerId={css.AutoHeaderContainer}
        />
      </div>

      {/* Main image */}
      <div className={css.halfPageContainer1}>
        <div className={css.border}>
          <img id="main-pic" src={test} alt="Logo" />
        </div>
      </div>

      {/* Main image */}
      <div className={css.halfPageContainer2}>
        <div className={css.border}>
        <div className={css.contactText}>
          <h1>Here is how you can contact me:</h1>
    
          <p>Drop me a message via my social media or give me a call/ SMS on (+46)76 149 4455</p>
          
          <div>
          <ContactForm />
          </div>


          <h3>Languages</h3>
          <p>We can chat in Swedish or English! (Whatever's your pleasure)</p>
          <h3>Areas of expertise</h3>
          <p>
            <ul>
              <li>General coding enquires</li>
              <li>Small to medium website builds</li>
              <li>Tech teaching</li>
              <li>Audio and Media production</li>
            </ul>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
