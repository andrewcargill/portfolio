import React, { useState } from "react";
import css from "../../styles/Work.module.css";

function DropDownGenerator({ title, content, isOpen, toggleOpen }) {
  return (
    <div className="text-border right-margin-desktop image-container">
      <div onClick={toggleOpen} className={css.expandableContainer}>
        <h2>{title}</h2>
      </div>
      {isOpen && (
        <div className={css.expandedContainer}>
          <div>{content}</div>
        </div>
      )}
    </div>
  );
}

export default DropDownGenerator;
