import CustomBtn from "../../styles/CustomButton.module.css"

const handleClickSocial = (url) => {
  window.open(url);
};

const ImagePlaylist = [
    {
      src: require("../images/forest1.png"),
      alt: "Alt text for false.png",
      caption: "Timber Company Website",
      highlight:
        <div>
          
            Django custom API with customer login and enquiry system.
            UX Designed and built with HTML/ CSS.
            <br/>
            <button 
              className={CustomBtn.fotter}
              onClick={ () =>
                handleClickSocial("https://parazker.com/proyectos/")
              }
              >BUTTON</button>

            <a href="www.home.com" >Live website</a>
        </div>
    },
    {
      src: require("../images/false1.png"),
      alt: "Alt text for pic.jpg",
      caption: "Fashion House Website",
      highlight:
      <div>
          
          Single Page HTML/CSS UX Designed website. Full responsive web application.
            <br/>
            <a href="www.home.com" >Live website</a>
            
          
        </div>
    },
    {
      src: require("../images/scratch2.png"),
      alt: "Alt text for image001.PNG",
      caption: "Scratch Teaching Aids",
      highlight:
      <div>
        visit my repository where you will find a number of teaching templates for students starting out in programming.
        <br/>
            <a href="www.home.com" >Live website</a>
      </div>
    },
    {
      src: require("../images/hangman1.png"),
      alt: "Alt text for false.png",
      caption: "Pure Python Hangman",
      highlight: "HTML/CSS/PYTHON"
    },
    {
      src: require("../images/superhero2.png"),
      alt: "Alt text for pic.jpg",
      caption: "SuperHero Chat",
      highlight: "HTML/CSS/PYTHON"
    },
    {
      src: require("../images/quiz1.png"),
      alt: "Alt text for image001.PNG",
      caption: "Javascript Music Quiz",
      highlight: "HTML/CSS/PYTHON"
    },
    {
      src: require("../images/autoText1.png"),
      alt: "Alt text for image001.PNG",
      caption: "Text Auto-sizing for ReactJS",
      highlight: "HTML/CSS/PYTHON"
    },
    {
      src: require("../images/autoText1.png"),
      alt: "Alt text for image001.PNG",
      caption: "Plug-in Hybrid Journey Calculator",
      highlight: "JAVASCRIPT"
    },
    
  ];
  
  export default ImagePlaylist;
  