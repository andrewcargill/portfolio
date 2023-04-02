import React from "react";
import '../../App.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import CustomBtn from "../../styles/CustomButton.module.css";
import {
  faArrowDown,
  faCheckSquare,
  faCoffee,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping);



function sayHello() {
  alert("You clicked me!");
}

function ContactSubContentDark() {

    return(
        <div id="action-button">
            <div className="text-border-buy left-margin-desktop box-shadow">
            {/* Button */}
            <div className="contact-button">
                <button className={CustomBtn.crazy} onClick={sayHello}>
                <div id="buy-basket">
                    <FontAwesomeIcon icon="cart-shopping" />
                </div>
                <div>Contact</div>
                </button>
            </div>
            {/* Text */}
            <div id="buy-tagline">
                One-on-One and small group online tuition!
            </div>
            </div>
      </div>
    )
}

export default ContactSubContentDark;