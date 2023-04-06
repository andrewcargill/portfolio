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
library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping);

function ContactSubContent(props) {
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
      <div id="buy-tagline">{props.text}</div>
    </div>
  );
}

export default ContactSubContent;
