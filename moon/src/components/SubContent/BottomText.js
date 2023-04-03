import React from "react";

function BottomText({ video }) {
  return (
    <div id="bottom-text" className="slide-up">
      <div
        id="bottom-text-content"
        className="text-border-white left-margin-desktop"
      >
        <video src={video} autoPlay muted loop />
      </div>
    </div>
  );
}

export default BottomText;
