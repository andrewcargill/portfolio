# Professional Portfolio<a id="home"></a>

Greetings! Welcome to my professional portfolio, meticulously crafted to showcase my coding projects and demonstrate my expertise in web development. I initiated this endeavor upon successfully completing my studies at the esteemed Code Institute, with the intention of providing a comprehensive overview of my capabilities to potential employers and clients.

## Design Objectives

Driven by a passion for UX Design and the artistic nuances of website development, I established specific design goals for this platform:

- **Responsive Design:** Ensuring optimal viewing experiences across all devices, from mobile screens to expansive wide-screen displays. The responsive design seamlessly adapts to different screen sizes.

- **Aesthetic Appeal:** Aiming to evoke a sense of spaciousness and simplicity through the strategic use of fonts, layouts, and interactive elements. The design prioritizes a clean and elegant visual presentation.

- **User-Friendly:** Prioritizing ease of management and scalability, the site is designed to be user-friendly, allowing for straightforward content management and future expansion.

## Core Design Concept

(Include images showcasing the site on various devices)

In conceptualizing the primary design of the site, I drew inspiration from the sophisticated marketing strategies employed by art galleries. Their utilization of fonts, well-organized text, and simple shapes as containers for information or promotional artwork served as a significant influence during the initial stages of design research. This approach has been woven into the fabric of the site to ensure a compelling and effective visual narrative.


# Custom Code and Bespoke Modules
## Dynamic Text Auto-Sizing Component<a id="auto-sizing"></a>

In my pursuit of creating visually impactful page headers, I developed a tailored component designed to optimize space utilization. This innovative component dynamically adjusts the font size of the text based on the dimensions of its container. This approach has proven to be immensely beneficial for achieving a polished and effective responsive design.

Experience the fluidity of this feature by resizing the window – the text seamlessly adapts to perfectly fit its container. This ensures a harmonious and aesthetically pleasing presentation across various screen sizes.


```jsx
  useEffect(() => {
    // adjust font size on window resize
    const handleResize = () => {
      
      const container = document.getElementById(containerId);
      const textEl = document.getElementById(textId);
      const containerHeight = container.offsetHeight;
      const containerWidth = container.offsetWidth;
      const containerArea = containerHeight * containerWidth;
      const textLength = text.length + (lineSpacing * 2) + 10;
      let RawFontSize = Math.sqrt(containerArea / textLength) * 2.5;
      let newFontSize = 0;
      newFontSize = RawFontSize * calFont;
      console.log(newFontSize);
      setFontSize(newFontSize);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [containerId, textId, fontSize, lineSpacing]);
```

Here is an example of how the component is rendered:

```jsx
 <div id="main-content-container">
      {/* Header Text Container*/}
      <div id="header-text-container" className="fade-in">
        {/* Auto Header Text Component */}
        <AutoHeaderText
          text="
          Here I am exploring 3D coding with HTML, CSS & JS. Spin the cube and display words.
          "
          maxFont="35px"
          minFont="15px"
          calFont="0.4"
          lineSpacing="1"
        />
      </div>
```

## Portfolio gallery <a id="portfolio"></a>
I crafted my portfolio gallery to elegantly present the desired information to users while maintaining simplicity for future expansion. The gallery component references a playlist containing all the data to be showcased on the portfolio page. Below is an example entry:

```jsx
    /* AUTO TEXT */
  {
    src: require("../images/autoText.png"),
    alt: "Alt text for image001.PNG",
    caption: "Text Auto-sizing for ReactJS",
    highlight: `A react component that sizes text to fill a container. Great for responsive design 
                and used across this website. Try out the interactive demo!`,
    devIcons: ["javascript", "react"],
    buttons: [
      {
        type: "page",
        label: "demo page",
        icon: "link",
        url: "/autotext"
      },
      {
        type: "link",
        label: "ReadMe",
        icon: "github",
        url: "https://github.com/andrewcargill/portfolio/blob/main/README.md#auto-sizing"
      },
    ]
  },

```



## Browser Drum Machine  <a id="drum"></a>
Even before delving into the world of coding, I harbored a desire to create something musical. With newfound knowledge in JavaScript and ReactJS, I sought a challenge. The result: a 16-step voice sequencer that truly put my skills to the test.

This coding endeavor commenced during the early days of ChatGPT's availability. Recognizing AI as the future of coding, I embraced the collaboration—melding human creativity with AI prowess to give life to my musical ideas.

Purposefully steering clear of tutorials or replicating existing projects, I reveled in the creative and expressive nature of coding. ChatGPT provided the knowledge and resources that empowered me to transform unique concepts into reality. 

### Elements

