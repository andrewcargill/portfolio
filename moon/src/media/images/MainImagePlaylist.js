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
    highlight: `A custom drum machine. Exploring how to trigger sounds on the web!
    Built from my head and not tutorials. Uses Javascript.`,
    devIcons: ["javascript", "react", "CSS", "HTML5"],
    buttons: [
      {
        type: "page",
        label: "project",
        icon: "code",
        url: "drum"
      },
    ]

  },
  /* The Cube */
  {
    src: require("../images/cube.png"),
    alt: "Alt text for false.png",
    caption: "The Cube",
    highlight: `A fun exploration into manipluating 3D objects in React. This is taken
    from a cube game I made in CodePen.`,
    devIcons: ["javascript", "react", "CSS", "HTML5"],
    buttons: [
      {
        type: "page",
        label: "Demo",
        icon: "code",
        url: "cube"
      },
      {
        type: "link",
        label: "codepen",
        icon: "codepen",
        url: "https://codepen.io/andyc01/pen/RweBxpm"
      }
     
    ]
  },
  /* Timber Company */
  {
    src: require("../images/timberLogo.png"),
    alt: "Alt text for false.png",
    caption: "Timber Company Website",
    highlight: `A website featuring a quote request section. The user can submit
          information and recieve a quote. Custom API and frontend.`,
          devIcons: ["python", "javascript", "CSS", "HTML5", "bootstrap", "django", "UX-Design"],
    buttons: [
      {
        type: "link",
        label: "Live site",
        icon: "link",
        url: "https://timbercompany.herokuapp.com/"
      },
      {
        type: "link",
        label: "github",
        icon: "github",
        url: "https://github.com/andrewcargill/johans_eco_timber"
      }
    ]
  },
  /* FASHION HOUSE */
  {
    src: require("../images/fasletest.png"),
    alt: "Alt text for pic.jpg",
    caption: "Fashion House Website",
    highlight: ` A one page website made using HTML & CSS. The design explores the use
    of positive and negative space.`,
    devIcons: ["CSS", "HTML5"],
    buttons: [
      {
        type: "link",
        label: "Live site",
        icon: "link",
        url: "https://andrewcargill.github.io/false/"
      },
      {
        type: "link",
        label: "github",
        icon: "github",
        url: "https://github.com/andrewcargill/false"
      }
     
    ]
  },
  /* AUTO TEXT */
  {
    src: require("../images/autoText.png"),
    alt: "Alt text for image001.PNG",
    caption: "Text Auto-sizing for ReactJS",
    highlight: `A react component that sizes text to fill a container. Used on this
    website for all headline text.`,
    devIcons: ["javascript", "react"],
    buttons: [
      {
        type: "page",
        label: "home page",
        icon: "link",
        url: "home"
      },
      
     
    ]
  },
  /* Scratch */
  {
    src: require("../images/scratch2.png"),
    alt: "Alt text for image001.PNG",
    caption: "Scratch Teaching Aids",
    highlight: `A repository of teaching aids and templates.`,
    devIcons: ["CSS", "HTML5"],
    buttons: [
      {
        type: "link",
        label: "Scratch",
        icon: "link",
        url: "https://codepen.io/andyc01"
      },
    ]
  },
  /* PYTHON HANGMAN */
  {
    src: require("../images/hangman1.png"),
    alt: "Alt text for false.png",
    caption: "Pure Python Hangman",
    highlight: `Coding for the console is fun! The limitations brings out the
    creativity in another way. This is a pure Python experience.`,
    devIcons: ["python"],
    buttons: [
      {
        type: "link",
        label: "Live site",
        icon: "link",
        url: "https://harry-hangman.herokuapp.com/"
      },
      {
        type: "link",
        label: "github",
        icon: "github",
        url: "https://github.com/andrewcargill/hangman"
      }
    ]
  },
  /* SUPERHERO CHAT */
  {
    src: require("../images/superhero2.png"),
    alt: "Alt text for pic.jpg",
    caption: "SuperHero Chat",
    highlight: `A react world with a custom Django API. Created as part of my studies
    in 2023.`,
    devIcons: ["javascript", "react", "CSS", "HTML5", "python", "django", "UX-Design"],
    buttons: [
      {
        type: "link",
        label: "Live site",
        icon: "link",
        url: "https://superherosocial.herokuapp.com/"
      },
      {
        type: "link",
        label: "github",
        icon: "github",
        url: "https://github.com/andrewcargill/superheros"
      }
    ]
  },
  /* MUSIC QUIZ */
  {
    src: require("../images/quiz1.png"),
    alt: "Alt text for image001.PNG",
    caption: "Javascript Music Quiz",
    highlight: `A Javascript game runs custom code to deliver an educational game for
    music students.`,
    devIcons: ["javascript", "CSS", "HTML5"],
    buttons: [
      {
        type: "link",
        label: "Live site",
        icon: "link",
        url: "https://andrewcargill.github.io/music-quiz/"
      },
      {
        type: "link",
        label: "github",
        icon: "github",
        url: "https://github.com/andrewcargill/music-quiz"
      }
    ]
  },
  /* HYBRID CALCULATOR */
  {
    src: require("../images/hybrid3.png"),
    alt: "Alt text for image001.PNG",
    caption: "Plug-in Hybrid Journey Calculator",
    highlight: `I created the calculator that I couldn't find on the internet! Add
    your journey details and find out how much you save.`,
    devIcons: ["javascript", "CSS", "HTML5"],
    buttons: [
      {
        type: "link",
        label: "Codepen Demo",
        icon: "link",
        url: "https://codepen.io/andyc01"
      },
     
    ]
  },
  
];


export default ImagePlaylist;
