import React from "react";
import HomeContent from "./HomeContent";
import Tutorials from "./Tutorials";
import Work from "./Work";
import About from "./About";
import ContactPage from "./ContactPage";
import Services from "./Services";

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
          <Tutorials navClick={handleOnClick}/>
        </div>
      );
    case "services":
      return (
        <div>
          <Services navClick={handleOnClick}/>
        </div>
      );
    case "work":
      return (
        <div>
          <Work navClick={handleOnClick}/>
        </div>
      );
    case "about":
      return (
        <div>
          <About navClick={handleOnClick}/>
        </div>
      );
    case "contact":
      return (
        <div>
          <ContactPage navClick={handleOnClick}/>
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
