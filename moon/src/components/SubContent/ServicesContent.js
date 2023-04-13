import React, { useState } from "react";
import css from "../../styles/ServicesContent.module.css";
import DropDownGenerator from "./DropDownGenerator";

function ServicesContent({ images }) {
  const [isOpen, setIsOpen] = useState([false, false]);

  const toggleOpen = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div className={`text-border right-margin-desktop image-container ${css.servicesContent}`}>
      <div>
      <DropDownGenerator
        title="Service 1"
        content="This is content for Service 1"
        isOpen={isOpen[0]}
        toggleOpen={() => toggleOpen(0)}
      />
      <DropDownGenerator
        title="Service 2"
        content="This is content for Service 2"
        isOpen={isOpen[1]}
        toggleOpen={() => toggleOpen(1)}
      />
      <DropDownGenerator
        title="Service 3"
        content="This is content for Service 3"
        isOpen={isOpen[2]}
        toggleOpen={() => toggleOpen(2)}
      />
      <DropDownGenerator
        title="Service 4"
        content="This is content for Service 4"
        isOpen={isOpen[3]}
        toggleOpen={() => toggleOpen(3)}
      />
      <DropDownGenerator
        title="Service 5"
        content="This is content for Service 5"
        isOpen={isOpen[4]}
        toggleOpen={() => toggleOpen(4)}
      />
    </div>
      
    </div>
  );
}

export default ServicesContent;
