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
      /* This Site */
    {
      src: require("../images/01.jpg"),
      alt: "Image for smartdesk.se",
      caption: "SmartDesk AI Grading",
      highlight: `A website that uses AI to grade student work. Built with ReactJS, Google Cloud, Firebase, and the OpenAI API. It features Stripe integration, tiered membership options, and a user-friendly interface.`,
      devIcons: ["javascript", "react", "firebase", "HTML5", "UX-Design"],
      buttons: [
        {
          type: "link",
          label: "Github",
          icon: "github",
          url: "https://github.com/andrewcargill/portfolio/blob/main/README.md#home"
        },
       
        {
          type: "link",
          label: "code",
          icon: "github",
          url: "https://github.com/andrewcargill/portfolio/blob/main/README.md#portfolio"
        },
       
      ]
  
    },
    /* This Site */
    {
      src: require("../images/01.jpg"),
      alt: "Image for andycargill.com",
      caption: "andycargill01",
      highlight: `A react frontend created using only custom CSS and JS code (No Bootstrap etc). I am exploring styling for XL viewports and flexbox containers.`,
      devIcons: ["javascript", "react", "CSS", "HTML5", "UX-Design"],
      buttons: [
        {
          type: "link",
          label: "Github",
          icon: "github",
          url: "https://github.com/andrewcargill/portfolio/blob/main/README.md#home"
        },
       
        {
          type: "link",
          label: "code",
          icon: "github",
          url: "https://github.com/andrewcargill/portfolio/blob/main/README.md#portfolio"
        },
       
      ]
  
    },
      /* AUTO TEXT */
  {
    src: require("../images/autoText.png"),
    alt: "Alt text for image001.PNG",
    caption: "Text Auto-sizing for ReactJS",
    highlight: `A react component that sizes text to fill a container. Great for responsive design and used across this
    website. Try out the interactive demo!`,
    devIcons: ["javascript", "react"],
    buttons: [
      {
        type: "page",
        label: "demo",
        icon: "code",
        url: "/autotext"
      },
      {
        type: "link",
        label: "github",
        icon: "github",
        url: "https://github.com/andrewcargill/portfolio/blob/main/README.md#auto-sizing"
      },
    ]
  },
  /* ShowJump Timer */
  {
    src: require("../images/showJump.jpg"),
    alt: "Image of sawmill go website",
    caption: "Show Jumping Timer",
    highlight: `Fully functioning competiton timer and results generator. 
    
     Developed using TypeScript and React, with the integration of React's Global State API.`,
    devIcons: ["javascript", "react", "CSS", "HTML5", "UX-Design"],
    buttons: [
      {
        type: "link",
        label: "app",
        icon: "code",
        url: "https://andrewcargill.github.io/typescript_react/"
      },
      {
        type: "link",
        label: "github",
        icon: "github",
        url: "https://github.com/andrewcargill/typescript_react"
      }
    ]

  },
  /* Sawmill Go */
  {
    src: require("../images/sawmillGo.jpg"),
    alt: "Image of sawmill go website",
    caption: "Sawmill Go!",
    highlight: `A productivity tool for sawmill owners with transparent forestry feature. Custom Django API and ReactJS Frontend.`,
    devIcons: ["javascript", "react", "CSS", "HTML5", "django", "python", "UX-Design"],
    buttons: [
      {
        type: "link",
        label: "website",
        icon: "link",
        url: "https://andrewcargill.github.io/sawmill_go/"
      },
      {
        type: "link",
        label: "github",
        icon: "github",
        url: "https://github.com/andrewcargill/sawmill_go/tree/main/mill"
      }
    ]

  },
  
  /* DrumMachine */
  {
    src: require("../images/dr01.png"),
    alt: "Alt text for false.png",
    caption: "Online Drum Machine",
    highlight: `This is a 16-step, 8 voice programmable drum-machine. The link below takes you to the current version of the project.`,
    devIcons: ["javascript", "react", "CSS", "HTML5"],
    buttons: [
      {
        type: "page",
        label: "demo",
        icon: "code",
        url: "/drum"
      },
      {
        type: "link",
        label: "gibhub",
        icon: "github",
        url: "https://github.com/andrewcargill/portfolio/blob/main/README.md#drum"
      },
     
    ]

  },
  /* The Cube */
  {
    src: require("../images/cube.png"),
    alt: "Alt text for false.png",
    caption: "The Cube",
    highlight: `A fun exploration into manipluating 3D objects. Below you can see both the React and CodePen versions of the project.`,

    devIcons: ["javascript", "react", "CSS", "HTML5"],
    buttons: [
      {
        type: "page",
        label: "Demo",
        icon: "code",
        url: "/cube"
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
    highlight: `A full-stack project with a custom build backend with customer login and online quoting system.`,
    // highlight: `A website featuring a quote request section. The user can submit
    //       information and recieve a quote. Custom API and frontend.`,
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
        url: "https://github.com/andrewcargill/johans_eco_timber/blob/main/README.md"
      }
    ]
  },
  /* FASHION HOUSE */
  {
    src: require("../images/fasletest.png"),
    alt: "Alt text for pic.jpg",
    caption: "Fashion House Website",
    highlight: `This website explores UX Design and the use of positive and negative space. Features creative use of PNG files and enbedded media.`,
    // highlight: ` A one page website made using HTML & CSS. The design explores the use
    // of positive and negative space.`,
    devIcons: ["UX-Design", "CSS", "HTML5"],
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
        url: "https://github.com/andrewcargill/false/blob/main/README.md"
      }
     
    ]
  },
  
  /* PYTHON HANGMAN */
  {
    src: require("../images/hangman1.png"),
    alt: "Alt text for false.png",
    caption: "Pure Python Hangman",
    highlight: `Coding for the console is fun! The limitations brings out the
    creativity in another way. This Hang Man game is a pure Python experience.`,
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
        url: "https://github.com/andrewcargill/hangman/blob/main/README.md"
      }
    ]
  },
  /* SUPERHERO CHAT */
  {
    src: require("../images/superhero2.png"),
    alt: "Alt text for pic.jpg",
    caption: "SuperHero Chat",
    highlight: `Full-Stack project with custom front and back ends. Created as part of my studies
    at the Code Institute in 2023.`,
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
        url: "https://github.com/andrewcargill/superheros/blob/main/README.md"
      }
    ]
  },
  /* MUSIC QUIZ */
  {
    src: require("../images/quiz1.png"),
    alt: "Alt text for image001.PNG",
    caption: "Javascript Music Quiz",
    highlight: `An educational 'True or False ' game for
    music students which presents random questions and tracks the students progress.`,
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
        url: "https://github.com/andrewcargill/music-quiz/blob/main/README.md"
      }
    ]
  },
  /* HYBRID CALCULATOR */
  {
    src: require("../images/hybrid3.png"),
    alt: "Alt text for image001.PNG",
    caption: "Plug-in Hybrid Journey Calculator",
    highlight: `I created the calculator that I couldn't find on the internet. Add
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

  /* Scratch */
  {
    src: require("../images/scratch2.png"),
    alt: "Alt text for image001.PNG",
    caption: "Scratch Teaching Aids",
    highlight: `I have been teaching students coding using Scratch and will be publishing a repository soon.`,
    devIcons: ["CSS", "HTML5"],
    buttons: [
      {
        type: "link",
        label: "Scratch",
        icon: "link",
        url: "https://scratch.mit.edu/users/andrewcargill01/"
      },
    ]
  },
  
];


export default ImagePlaylist;
