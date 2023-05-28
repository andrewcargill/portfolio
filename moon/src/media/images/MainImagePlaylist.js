import CustomBtn from "../../styles/CustomButton.module.css";
import css from "../../styles/Work.module.css";

const handleClickSocial = (url) => {
  window.open(url);
};

const ImagePlaylist = [
  {
    src: require("../images/forest1.png"),
    alt: "Alt text for false.png",
    caption: "Timber Company Website",
    highlight: (
      <div className={css.highlightContainer}>
        <div className={css.highlightText}>
          Django custom API with customer login and enquiry system. UX Designed
          and built with HTML/ CSS.
        </div>
        <div className={css.highlightButtonContainer}>
          <button
            className={CustomBtn.subContent}
            onClick={() => handleClickSocial("https://parazker.com/proyectos/")}
          >
            Live Site
          </button>

          <button
            className={CustomBtn.subContent}
            onClick={() => handleClickSocial("https://parazker.com/proyectos/")}
          >
            Live Site
          </button>
        </div>
      </div>
    ),
  },
  {
    src: require("../images/false1.png"),
    alt: "Alt text for pic.jpg",
    caption: "Fashion House Website",
    highlight: (
      <div className={css.highlightContainer}>
        <div className={css.highlightText}>
          Django custom API with customer login and enquiry system. UX Designed
          and built with HTML/ CSS.
        </div>
        <div className={css.highlightButtonContainer}>
          <button
            className={CustomBtn.subContent}
            onClick={() => handleClickSocial("https://parazker.com/proyectos/")}
          >
            Live Site
          </button>

          <button
            className={CustomBtn.subContent}
            onClick={() => handleClickSocial("https://parazker.com/proyectos/")}
          >
            Live Site
          </button>
        </div>
      </div>
    ),
  },
  {
    src: require("../images/scratch2.png"),
    alt: "Alt text for image001.PNG",
    caption: "Scratch Teaching Aids",
    highlight: (
      <div>
        visit my repository where you will find a number of teaching templates
        for students starting out in programming.
        <br />
        <a href="www.home.com">Live website</a>
      </div>
    ),
  },
  {
    src: require("../images/hangman1.png"),
    alt: "Alt text for false.png",
    caption: "Pure Python Hangman",
    highlight: "HTML/CSS/PYTHON",
  },
  {
    src: require("../images/superhero2.png"),
    alt: "Alt text for pic.jpg",
    caption: "SuperHero Chat",
    highlight: "HTML/CSS/PYTHON",
  },
  {
    src: require("../images/quiz1.png"),
    alt: "Alt text for image001.PNG",
    caption: "Javascript Music Quiz",
    highlight: "HTML/CSS/PYTHON",
  },
  {
    src: require("../images/autoText1.png"),
    alt: "Alt text for image001.PNG",
    caption: "Text Auto-sizing for ReactJS",
    highlight: "HTML/CSS/PYTHON",
  },
  {
    src: require("../images/autoText1.png"),
    alt: "Alt text for image001.PNG",
    caption: "Plug-in Hybrid Journey Calculator",
    highlight: "JAVASCRIPT",
  },
];

export default ImagePlaylist;
