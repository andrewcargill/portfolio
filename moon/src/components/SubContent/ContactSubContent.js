import React from "react";
import "../../App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import CustomBtn from "../../styles/CustomButton.module.css";
import { useNavigate } from 'react-router-dom';
import {
  faArrowDown,
  faCheckSquare,
  faCoffee,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AutoHeaderText from "./AutoHeaderText";
library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping);


function ContactSubContent(props) {
  const navigate = useNavigate();

  const handleNavClick = (page) => {
    navigate(page);
  }

  return (
    <div className="text-border-buy left-margin-desktop box-shadow">
      {/* Button */}
      <div className="contact-button">
        <button className={CustomBtn.light} onClick={() => handleNavClick("/contact")}>
          <div id="buy-basket">
            <FontAwesomeIcon icon="cart-shopping" />
          </div>
          <div>Contact</div>
        </button>
      </div>
      {/* Text */}
      <div id="buy-tagline">
        
        <AutoHeaderText 
        text="Website design and production"
        maxFont="10px"
        minFont="10px"
        containerId="buy-tagline"
        textId="contact-text"
        calFont="0.45"
        lineSpacing="1"
        />
       
        
        </div>
    </div>
  );
}

export default ContactSubContent;
