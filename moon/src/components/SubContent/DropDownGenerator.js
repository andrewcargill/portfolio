import React, { useState } from "react";
import css from "../../styles/dropDown.module.css";


function DropDownGenerator({ id, title, content, activeDropdownId, setActiveDropdownId }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setActiveDropdownId(isOpen && activeDropdownId === id ? null : id);
  };

  return (
    <div className="text-border right-margin-desktop image-container">
      <button onClick={toggleOpen} className={css.expandableContainer}>{title}</button>
        {/* <h2>{title}</h2>
      </div> */}
      {isOpen && activeDropdownId === id && (
        <div className={css.expandedContainer}>
          <div id={css.content}>{content}</div>
        </div>
      )}
    </div>
  );
}

export default DropDownGenerator;
