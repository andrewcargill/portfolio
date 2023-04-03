import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderText() {
  return (
    <div id="header-text" className="fade-in">
      <div className="content-no-background left-margin-desktop">
        Welcome to my world where creativity and technology collide. I am a
        full-stack engineer with a background in media, art and teaching. So
        step into my world, and let's explore the endless possibilities
        together. <FontAwesomeIcon icon="arrow-down" />{" "}
        <FontAwesomeIcon icon="arrow-down" />{" "}
        <FontAwesomeIcon icon="arrow-down" />
      </div>
    </div>
  );
}

export default HeaderText;
