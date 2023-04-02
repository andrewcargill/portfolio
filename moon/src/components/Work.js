import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import test from "../media/images/false.png";
import CustomBtn from "../styles/CustomButton.module.css";
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

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);

function sayHello() {
  alert("You clicked me!");
}

function Work() {
    return(
         <div id="main-content">
          <div id="header-text">
            <div className="content-no-background left-margin-desktop">
              Work examples! <FontAwesomeIcon icon="arrow-down" />{" "}
              <FontAwesomeIcon icon="arrow-down" />{" "}
              <FontAwesomeIcon icon="arrow-down" />
            </div>
          </div>
          {/* Action Section */}
          <div id="action-button">
            <div className="text-border-buy left-margin-desktop box-shadow">
              {/* Button */}
              <div className="contact-button">
                <button className={CustomBtn.light} onClick={sayHello}>
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
          {/* Sub info - Video */}
          <div id="bottom-text">
            <div
              id="bottom-text-content"
              className="text-border-white left-margin-desktop"
            >
              <video src={video} autoPlay muted loop />
            </div>
          </div>
          {/* Main image */}
          <div id="image">
            <div className="text-border right-margin-desktop">
              <img id="main-pic" src={test} alt="Logo" />
            </div>
          </div>
        </div>
    );
}

export default Work;
