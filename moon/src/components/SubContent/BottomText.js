import React from "react";

function BottomText({ video }) {
  return (
    
      <div
        id="subcontent-container-bottom-content"
        className="text-border-white left-margin-desktop"
      >
        <video src={video} autoPlay muted loop />
      </div>
    
  );
}

export default BottomText;
