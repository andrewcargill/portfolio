import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import logo from "./media/images/flodhus.png";
import CustomBtn from "./styles/CustomButton.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
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
  faSpotify,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeContent from "./components/HomeContent";
import Tutorials from "./components/Tutorials";
import Work from "./components/Work";
import About from "./components/About";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);


const Main = () => {

  const [mainContent, setMainContent] = useState('');

  const handleOnClick = (props) => {
    setMainContent(props)
    console.log('------------andy Line 37 mainContent', mainContent);
  }

  const renderContent = () => {
    console.log({mainContent})
    switch (mainContent) {
        case "home":
            return(
                <div>
                    <HomeContent />
                </div>
            );
        case "tuition":
            return (
                <div>
                    <Tutorials />
                </div>
            );
        case "work":
            return (
                <div>
                    <Work />
                </div>
            );
        case "about":
            return (
                <div>
                    <About />
                </div>
            );
        default:
            return (
                <div>
                    <HomeContent />
                </div>
            );
    }
    
}

  const handleClickSocial = (url) => {
    window.open(url);
  };

  return (
    <div className="App">
      <div id="main">
        {/* Header */}
        <div id="header">
          <div id="logo" className="header-element1">
            <img
              type="button"
              onClick={() =>
                handleOnClick("home")
              } 
              id="logo-image"
              src={logo}
              alt=""
            />
          </div>
          <div id="nav" className="header-element-right">
            <button onClick={() =>
              handleOnClick("tuition")
            } 
            className={CustomBtn.white}>Tutorials</button>
            <button onClick={() =>
              handleOnClick("work")
            }
              className={CustomBtn.white}>Work</button>
            <button onClick={() =>
              handleOnClick("about")
            }
              className={CustomBtn.white}>About</button>
          </div>
        </div>

        {/* START OF Main Content */}
        {/* <HomeContent /> */}
        {renderContent()}


        {/* END OF MAIN CONTENT */}

        {/* Footer */}
        <div id="footer">
          {/* <div className="text-border"> */}
          {/* Button 1 */}
          <button
            className={CustomBtn.footer}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </div>
            <div className={CustomBtn.footerLabel}> Instagram</div>
          </button>
          {/* Button 2 */}
          <button
            className={CustomBtn.footer}
            onClick={() =>
              handleClickSocial("https://www.linkedin.com/in/andycargill01/")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>

            <div className={CustomBtn.footerLabel}> LinkedIn</div>
          </button>
          {/* Button 3 */}
          <button
            className={CustomBtn.footer}
            onClick={() => handleClickSocial("https://spotfiy.com")}
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faSpotify} />
            </div>

            <div className={CustomBtn.footerLabel}> Spotify</div>
          </button>
          {/* Button 4 */}
          <button
            className={CustomBtn.footer}
            onClick={() =>
              handleClickSocial("https://github.com/andrewcargill")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faGithubSquare} />
            </div>
            <div className={CustomBtn.footerLabel}> GitHub</div>
          </button>
          {/* Button 5 */}
          <button
            className={CustomBtn.footer}
            onClick={() => handleClickSocial("https://codepen.io/andyc01")}
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faCodepen} />
            </div>
            <div className={CustomBtn.footerLabel}> Codepen</div>
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
