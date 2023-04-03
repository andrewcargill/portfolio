import React from "react";
import '../../App.css'
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



function sayHello() {
  alert("You clicked me!");
}

function ContactSubContent(props) {

    const navClick = (value) => {
      console.log('------------andy Line 24 ', );
      
      props.navSubClick(value);
    }


    return(
        <div id="action-button">
            <div className="text-border-buy left-margin-desktop box-shadow">
            {/* Button */}
            <div className="contact-button">
                <button className={CustomBtn.light} 
                onClick={() => navClick('about')}
                >
                <div id="buy-basket">
                    <FontAwesomeIcon icon="cart-shopping" />
                </div>
                <div>Contact</div>
                </button>
            </div>
            {/* Text */}
            <div id="buy-tagline">
                It doesn't have to cost the world to bring your ideas to life.
                Get the web working for you today!
            </div>
            </div>
      </div>
    )
}

export default ContactSubContent;