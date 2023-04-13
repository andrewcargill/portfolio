import React, { useState } from "react";
import css from "../../styles/ServicesContent.module.css";
import DropDownGenerator from "./DropDownGenerator";

function ServicesContent() {
  
  const [activeDropdownId, setActiveDropdownId] = useState(null);

  const dropdownItems = [
    { id: 1, title: "Coding", 
    content: "I am profetient in ReactJS, Javascript, Python, HTML/CSS, Django, NodeJS" },
    { id: 2, title: "UX design and web development", 
    content: "Really get you website working for you with a custom UX designed website. Future proof and expandable as you business expands." },
    { id: 3, title: "Site review and future planning", 
    content: "If you don't feel it's time for a new site, then it could be worth just spending some time modernizing the site you have. This can be an afforable way to give some jucie!" },
    { id: 4, title: "Teaching", 
    content: "I have 20 years of teaching experience and comfortable teaching 1-on-1 or to larger groups of 50+ people." },
    { id: 5, title: "Custom Audio and Video content", 
    content: "Audio is my background. So I have contacts with both video and music creators. Make you digital content personal and tagerted to your customers." },
  ];


  return (
    <div className={`text-border right-margin-desktop image-container`}>
      {dropdownItems.map(({ id, title, content }) => (
        <DropDownGenerator
          key={id}
          id={id}
          title={title}
          content={content}
          activeDropdownId={activeDropdownId}
          setActiveDropdownId={setActiveDropdownId}
        />
      ))}
    </div>
  );
}

export default ServicesContent;
