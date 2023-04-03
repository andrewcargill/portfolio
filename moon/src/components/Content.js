// Content.js

import React from "react";
import HomeContent from "./HomeContent";
import Tutorials from "./Tutorials";
import Work from "./Work";
import About from "./About";

export const renderContent = (mainContent, handleOnClick) => {
  switch (mainContent) {
    case "home":
      return (
        <div>
          <HomeContent navClick={handleOnClick} />
        </div>
      );
    case "tuition":
      return (
        <div>
          <Tutorials />
        </div>
      );
    case "work":
      return (
        <div>
          <Work />
        </div>
      );
    case "about":
      return (
        <div>
          <About />
        </div>
      );
    default:
      return (
        <div>
          <HomeContent navClick={handleOnClick} />
        </div>
      );
  }
};
