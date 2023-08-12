import React from "react";
import CustomBtn from "../styles/CustomButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faLinkedin,
  faGithubSquare,
  faCodepen,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ handleClickSocial }) => {
  return (
    <div id="footer">
      {/* Button 1 */}
      <button
        className={`fade-in-scale ${CustomBtn.footer}`}
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
        className={`zoom-in shake ${CustomBtn.footer}`}
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
        className={`fade-in-scale ${CustomBtn.footer}`}
        onClick={() => handleClickSocial("https://api.whatsapp.com/send?phone=+46761494455&text=Hello%20Andy,%20I%20was%20looking%20at%20your%20site%20and...")}
      >

        <div id="buy-basket">
          <FontAwesomeIcon icon={faSquareWhatsapp} />
        </div>

        <div className={CustomBtn.footerLabel}> WhatsApp</div>
      </button>
      {/* Button 4 */}
      <button
        className={`fade-in-scale ${CustomBtn.footer}`}
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
        className={`fade-in-scale ${CustomBtn.footer}`}
        onClick={() => handleClickSocial("https://codepen.io/andyc01")}
      >
        <div id="buy-basket">
          <FontAwesomeIcon icon={faCodepen} />
        </div>
        <div className={CustomBtn.footerLabel}> Codepen</div>
      </button>
    </div>
  );
};

export default Footer;
