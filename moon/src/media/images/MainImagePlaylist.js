import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomBtn from "../../styles/CustomButton.module.css";
import css from "../../styles/Work.module.css";

import { faCode, faSquareUpRight } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagramSquare,
  faLinkedin,
  faGithubSquare,
  faSpotify,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

const handleClickSocial = (url) => {
  window.open(url);
};

const ImagePlaylist = [
  /* DR-01 DrumMachine */
  {
    src: require("../images/autoText1.png"),
    alt: "Alt text for false.png",
    caption: "DR-01",
    highlight: (
      <div className={css.highlightContainer}>
        <div className={css.highlightText}>
          A custom drum machine. Exploring how to trigger sounds on the web!
          Built from my head and not tutorials. Uses Javascript.
        </div>
        <div className={css.highlightButtonContainer}>
          {/* Button 1 */}
          <button
            className={`fade-in-scale ${CustomBtn.subContentSingle}`}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faSquareUpRight} /> Demo Page
            </div>
            
          </button>

         
        </div>
      </div>
    ),
  },
  /* THE CUBE */
  {
    src: require("../images/autoText1.png"),
    alt: "Alt text for false.png",
    caption: "The Cube",
    highlight: (
      <div className={css.highlightContainer}>
        <div className={css.highlightText}>
          A fun exploration into manipluating 3D objects in React. This is taken
          from a cube game I made in CodePen.
        </div>
        <div className={css.highlightButtonContainer}>
          {/* Button 1 */}
          <button
            className={`fade-in-scale ${CustomBtn.subContent}`}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faSquareUpRight} /> Demo
            </div>
            
          </button>

         {/* Button 2 */}
         <button
            className={`fade-in-scale ${CustomBtn.subContent}`}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faCodepen} /> CodePen
            </div>
            
          </button>
        </div>
      </div>
    ),
  },
    /* TIMBER COMPANY */
  {
    src: require("../images/forest1.png"),
    alt: "Alt text for false.png",
    caption: "Timber Company Website",
    highlight: (
      <div className={css.highlightContainer}>
        <div className={css.highlightText}>
          A website featuring a quote request section. The user can submit
          information and recieve a quote. Custom API and frontend.
        </div>
        <div className={css.highlightButtonContainer}>
          {/* Button 1 */}
          <button
            className={`fade-in-scale ${CustomBtn.subContent}`}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faSquareUpRight} /> Live Site
            </div>
            
          </button>

         {/* Button 2 */}
         <button
            className={`fade-in-scale ${CustomBtn.subContent}`}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faGithubSquare} /> Github
            </div>
            
          </button>
        </div>
      </div>
    ),
  },
  /* FASHION HOUSE */
  {
    src: require("../images/false1.png"),
    alt: "Alt text for pic.jpg",
    caption: "Fashion House Website",
    highlight: (
      <div className={css.highlightContainer}>
        <div className={css.highlightText}>
          A one page website made using HTML & CSS. The design explores the use
          of positive and negative space.
        </div>
        <div className={css.highlightButtonContainer}>
          {/* Button 1 */}
          <button
            className={`fade-in-scale ${CustomBtn.subContent}`}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faSquareUpRight} /> Live Site
            </div>
            
          </button>

         {/* Button 2 */}
         <button
            className={`fade-in-scale ${CustomBtn.subContent}`}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faGithubSquare} /> Github
            </div>
            
          </button>
        </div>
      </div>
    ),
  },
  /* SCRATCH */
  {
    src: require("../images/scratch2.png"),
    alt: "Alt text for image001.PNG",
    caption: "Scratch Teaching Aids",
    highlight: (
      <div className={css.highlightContainer}>
        <div className={css.highlightText}>
          A repository of teaching aids and templates.
        </div>
        <div className={css.highlightButtonContainer}>
          {/* Button 1 */}
          <button
            className={`fade-in-scale ${CustomBtn.subContentSingle}`}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faSquareUpRight} /> Scratch
            </div>
            
          </button>

         
        </div>
      </div>
    ),
  },
  /* PYTHON HANGMAN */
  {
    src: require("../images/hangman1.png"),
    alt: "Alt text for false.png",
    caption: "Pure Python Hangman",
    highlight: (
      <div className={css.highlightContainer}>
        <div className={css.highlightText}>
          Coding for the console is fun! The limitations brings out the
          creativity in another way. This is a pure Python experience.
        </div>
        <div className={css.highlightButtonContainer}>
          {/* Button 1 */}
          <button
            className={`fade-in-scale ${CustomBtn.subContent}`}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faSquareUpRight} /> Live Site
            </div>
            
          </button>

         {/* Button 2 */}
         <button
            className={`fade-in-scale ${CustomBtn.subContent}`}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faGithubSquare} /> Github
            </div>
            
          </button>
        </div>
      </div>
    ),
  },
  /* SUPERHERO CHAT */
  {
    src: require("../images/superhero2.png"),
    alt: "Alt text for pic.jpg",
    caption: "SuperHero Chat",
    highlight: (
      <div className={css.highlightContainer}>
        <div className={css.highlightText}>
          A react world with a custom Django API. Created as part of my studies
          in 2023.
        </div>
        <div className={css.highlightButtonContainer}>
          {/* Button 1 */}
          <button
            className={`fade-in-scale ${CustomBtn.subContent}`}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faSquareUpRight} /> Live Site
            </div>
            
          </button>

         {/* Button 2 */}
         <button
            className={`fade-in-scale ${CustomBtn.subContent}`}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faGithubSquare} /> Github
            </div>
            
          </button>
        </div>
      </div>
    ),
  },
  /* MUSIC QUIZ */
  {
    src: require("../images/quiz1.png"),
    alt: "Alt text for image001.PNG",
    caption: "Javascript Music Quiz",
    highlight: (
      <div className={css.highlightContainer}>
        <div className={css.highlightText}>
          A Javascript game runs custom code to deliver an educational game for
          music students.
        </div>
        <div className={css.highlightButtonContainer}>
          {/* Button 1 */}
          <button
            className={`fade-in-scale ${CustomBtn.subContent}`}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faSquareUpRight} /> Live Site
            </div>
            
          </button>

         {/* Button 2 */}
         <button
            className={`fade-in-scale ${CustomBtn.subContent}`}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faGithubSquare} /> Github
            </div>
            
          </button>
        </div>
      </div>
    ),
  },
  /* AUTO TEXT */
  {
    src: require("../images/autoText1.png"),
    alt: "Alt text for image001.PNG",
    caption: "Text Auto-sizing for ReactJS",
    highlight: (
      <div className={css.highlightContainer}>
        <div className={css.highlightText}>
          A react component that sizes text to fill a container. Used on this
          website for all headline text.
        </div>
        <div className={css.highlightButtonContainer}>
          {/* Button 1 */}
          <button
            className={`fade-in-scale ${CustomBtn.subContentSingle}`}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faSquareUpRight} /> Demo Page
            </div>
            
          </button>

        
        </div>
      </div>
    ),
  },
  /* HYBRID CALCULATOR */
  {
    src: require("../images/autoText1.png"),
    alt: "Alt text for image001.PNG",
    caption: "Plug-in Hybrid Journey Calculator",
    highlight: (
      <div className={css.highlightContainer}>
        <div className={css.highlightText}>
          I created the calculator that I couldn't find on the internet! Add
          your journey details and find out how much you save.
        </div>
        <div className={css.highlightButtonContainer}>
          {/* Button 1 */}
          <button
            className={`fade-in-scale ${CustomBtn.subContentSingle}`}
            onClick={() =>
              handleClickSocial("https://instagram.com/andycargill01")
            }
          >
            <div id="buy-basket">
              <FontAwesomeIcon icon={faCodepen} /> CodePen
            </div>
            
          </button>

         
        </div>
      </div>
    ),
  },
];

export default ImagePlaylist;
