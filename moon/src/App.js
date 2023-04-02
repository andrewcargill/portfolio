import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import test from "./media/images/false.png";
import logo from "./media/images/flodhus.png";
import CustomBtn from "./styles/CustomButton.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import video from "./media/video/advert.mp4";
import {
  faArrowDown,
  faCheckSquare,
  faCoffee,
  faCartShopping,
 
} from "@fortawesome/free-solid-svg-icons";

import {  
  faInstagramSquare,
  faLinkedin,
  faGithubSquare,
  faSpotify
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping,);

function sayHello() {
  alert("You clicked me!");
}

function App() {
  return (
    <div className="App">
      <div id="main">
        {/* Header */}
        <div id="header">
          <div id="logo" className="header-element1">
            <img id="logo-image" src={logo} alt="" />
          </div>
          <div id="nav" className="header-element-right">
            <button className={CustomBtn.white}>Tutorials</button>
            <button className={CustomBtn.white}>Work</button>
            <button className={CustomBtn.white}>About</button>
          </div>
        </div>
        {/* Main Content */}
        <div id="main-content">
          <div id="header-text">
            <div className="content-no-background left-margin-desktop">
              {/* In a world gone a little crazy I think it's absolutly the right
              time to have a new stunningly custom website made for your
              business, hobby or interest group. */}
              Welcome to my world where creativity and technology collide. I am a full-stack engineer with a background in music, art and teaching. So step into my world, and let's explore the endless possibilities together.
              {" "}
              <FontAwesomeIcon icon="arrow-down" />{" "}
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
        {/* Footer */}
        <div id="footer">
          {/* <div className="text-border"> */}
            {/* Button 1 */}
            <button className={CustomBtn.footer} onClick={sayHello}>
              <div id="buy-basket">
              <FontAwesomeIcon icon={faInstagramSquare} />
              </div>
              <div className={CustomBtn.footerLabel}> Instagram</div>
            </button>
            {/* Button 2 */}
            <button className={CustomBtn.footer} onClick={sayHello}>
              <div id="buy-basket">
              <FontAwesomeIcon icon={faLinkedin} />
              </div>

              <div className={CustomBtn.footerLabel}> LinkedIn</div>
            </button>
            {/* Button 3 */}
            <button className={CustomBtn.footer} onClick={sayHello}>
              <div id="buy-basket">
              <FontAwesomeIcon icon={faSpotify} />
              </div>

              <div className={CustomBtn.footerLabel}> Spotify</div>
            </button>
            {/* Button 4 */}
            <button className={CustomBtn.footer} onClick={sayHello}>
              <div id="buy-basket">
              <FontAwesomeIcon icon={faGithubSquare} />
              </div>
              <div className={CustomBtn.footerLabel}> GitHub</div>
            </button>
            {/* Button 5 */}
            <button className={CustomBtn.footer} onClick={sayHello}>
              <div id="buy-basket">
              <FontAwesomeIcon icon={faGithubSquare} />
              </div>
              <div className={CustomBtn.footerLabel}> GitHub</div>
            </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
