import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderText({ text }) {
  return (
    <div id="header-text" className="fade-in">
      <div className="content-no-background left-margin-desktop">
        {text}  <FontAwesomeIcon icon="arrow-down" />{" "}
          <FontAwesomeIcon icon="arrow-down" />{" "}
          <FontAwesomeIcon icon="arrow-down" />
      </div>
    </div>
  );
}

export default HeaderText;
