import React, { useState } from "react";
import css from "../../styles/ServicesContent.module.css";
import DropDownGenerator from "./DropDownGenerator";
import ServicesDropdownContent from "./ServicesDropdownContent";

function ServicesContent() {
  const [activeDropdownId, setActiveDropdownId] = useState(null);

  const dropdownItems = [
    {
      id: 1,
      title: "Coding",
      content:
        <div> 
          <h4>Tech Stack:</h4>
          <h5>Front-end</h5>
          <p>
          <ul>
            <li>HTML, CSS & Javascript</li>
            <li>React, jQuery, Angular</li>
            <li>Bootstrap</li>
          </ul>
          </p>
          <h5>Back-end</h5>
          <p>
          <ul>
            <li>Javascipt (Node.js)</li>
            <li>Python (Django)</li>
            <li>PHP</li>
            <li>Database: MySQL, PostgreSQL</li>
            <li>API development via Django</li>
            <li>Version control system Git</li>
          </ul>
          </p>
          

        </div>
    },
    {
      id: 2,
      title: "UX design and web development",
      content:
        <div>
          <h5>UX Design</h5>
          <p> UX design (short for user experience design) is the process of designing digital 
          products or services that provide a positive and enjoyable experience for users. </p>

          <h5>Web Development</h5>
          <p> Web development involves creating the technical infrastructure and code that powers 
          websites and web applications, while UX design focuses on creating the best possible user 
          experience for those using the website or application.</p>
    
        </div>

    },
    {
      id: 3,
      title: "Website review and future planning",
      content:
        <div>
          <h5>Website Review</h5>
          <p>Many businesses and organizations have a website that may not be performing optimally or 
            meeting their current needs. By offering a website review, a web design company can identify 
            areas for improvement, such as user experience, accessibility, search engine optimization, and 
            mobile responsiveness.</p>
            <h5>Future Planning</h5>
            <p>
            Future planning can also be an important service to offer as it helps clients to plan for the future
             growth and evolution of their website. This can include planning for new features, scalability, 
             and security, as well as identifying opportunities for innovation and differentiation. By providing
              this service, a web design company can help their clients to stay ahead of the curve and remain competitive 
              in the ever-changing digital landscape.
            </p>
        </div>
    },
    {
      id: 4,
      title: "Teaching",
      content:
        <div>
          <h5>The importantance</h5>
          <p>
          With the increasing importance of technology in our daily lives, it's essential for students to have a foundational
           understanding of programming languages and concepts. By teaching programming in a fun and engaging way through Scratch, 
           you can introduce young students to the basics of coding and problem-solving.
          </p>

          <h5>Other Benefits</h5>
          <p>
          Teaching programming and web development to young students can also help to promote critical thinking, creativity, 
          and problem-solving skills, which are important for success in many areas of life. By providing this service, you can help 
          students to develop the skills they need to succeed in an increasingly digital world.
          </p>
        </div>
    },
    
  ];

  return (
    <div className={`text-border right-margin-desktop image-container ${css.bgroundImage}`}>
      <div id={css.contentContainer}>
        <div>
          <h1>Full-Stack Web Development Solutions</h1>
        </div>
        {ServicesDropdownContent.map(({ id, title, content }) => (
         <div className={css.dropDown}>
         <DropDownGenerator
            key={id}
            id={id}
            title={title}
            content={content}
            activeDropdownId={activeDropdownId}
            setActiveDropdownId={setActiveDropdownId}
            
          /></div>
        ))}
        
      </div>
      {/* <div id={css.contentContainer}>
        <div>
          <h1>Full-Stack Web Development Solutions</h1>
        </div>
        {dropdownItems.map(({ id, title, content }) => (
         <div className={css.dropDown}>
         <DropDownGenerator
            key={id}
            id={id}
            title={title}
            content={content}
            activeDropdownId={activeDropdownId}
            setActiveDropdownId={setActiveDropdownId}
            
          /></div>
        ))}
        
      </div> */}
    </div>
  );
}

export default ServicesContent;
