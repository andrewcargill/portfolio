import React from "react";

function ContainerFull({ test }) {
  return (
    <div id="image" className="slide-right">
      <div className="text-border right-margin-desktop">
        <img id="main-pic" src={test} alt="Logo" />
      </div>
    </div>
  );
}

export default ContainerFull;
