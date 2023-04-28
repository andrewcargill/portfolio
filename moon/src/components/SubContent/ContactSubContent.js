import React from "react";
import "../../App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import CustomBtn from "../../styles/CustomButton.module.css";
import {
  faArrowDown,
  faCheckSquare,
  faCoffee,
  faCartShopping,
  faPrescriptionBottleMedical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AutoHeaderText from "./AutoHeaderText";
library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping);

function ContactSubContent(props) {
  console.log('contact props:', props.navSubClick)

  const navClick = (value) => {
    props.navSubClick(value);
  };

  return (
    <div className="text-border-buy left-margin-desktop box-shadow">
      {/* Button */}
      <div className="contact-button">
        <button className={CustomBtn.light} onClick={() => navClick("contact")}>
          <div id="buy-basket">
            <FontAwesomeIcon icon="cart-shopping" />
          </div>
          <div>Contact</div>
        </button>
      </div>
      {/* Text */}
      <div id="buy-tagline">
        <div className="contact-text">
        <AutoHeaderText 
        text="Coding, Audio, UX Design... Give me a call!"
        maxFont="10px"
        minFont="10px"
        containerId="buy-tagline"
        textId="contact-text"
        calFont="0.45"
        lineSpacing="1"
        />
        </div>
        
        </div>
    </div>
  );
}

export default ContactSubContent;
