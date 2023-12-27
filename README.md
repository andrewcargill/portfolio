# Professional Portfolio

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
## Dynamic Text Auto-Sizing Component

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

## Portfolio gallery 
I designed my portfolio gallery to both display the information I wanted to users along with being simple to expand. The component references a playlist which contains all the data to be rendered within the portfolio page. Below is an example of a field. 

´´´jsx
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
  ´´´
  


### Auto-sizing header text component
information about it here

### Navigation
