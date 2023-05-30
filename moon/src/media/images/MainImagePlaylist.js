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
    src: require("../images/dr01.png"),
    alt: "Alt text for false.png",
    caption: "DR-01",
    highlight:" info info",
    buttons: [
      {
        type: "link",
        label: "Demo Page",
        icon: "codepen",
        url: "https://github.com/andrewcargill"
      },
     
    ]
  },
  {
    src: require("../images/dr01.png"),
    alt: "Alt text for false.png",
    caption: "DR-01",
    highlight:" info info",
    buttons: [
      {
        type: "page",
        label: "Demo Page",
        icon: "github",
        url: "tuition"
      },
      {
        type: "page",
        label: "testing",
        icon: "link",
        url: "http:www.google.com"
      }
     
    ]
  },
  
];


export default ImagePlaylist;
