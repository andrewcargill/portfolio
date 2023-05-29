import React from "react";
import HomeContent from "./HomeContent";
import Tutorials from "./Tutorials";
import Work from "./Work";
import About from "./About";
import ContactPage from "./ContactPage";
import Services from "./Services";


export const renderContent = (mainContent, handleOnClick) => {
  console.log("value of mainContent: ", mainContent);
  console.log("value of handleOnClick: ", handleOnClick);
  
  switch (mainContent) {
    case "home":
      console.log("I am in home")
      return (
        <div>
          <HomeContent navClick={handleOnClick} />
        </div>
      );
    case "tuition":
      console.log("I am in tutorials")
      return (
        <div>
          <Tutorials navClick={handleOnClick}/>
        </div>
      );
    case "services":
      console.log("I am in services")
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
