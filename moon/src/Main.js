import React, { useState } from "react";
import ImagePlaylist from "./media/images/MainImagePlaylist";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { renderContent } from "./components/Content";
import CustomBtn from "./styles/CustomButton.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowDown,
  faCheckSquare,
  faCoffee,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import {
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import Header from "./components/Header";
import Footer from "./components/Footer";

library.add(faArrowDown, faCheckSquare, faCoffee, faCartShopping, faCodepen);


const Main = () => {

  const [mainContent, setMainContent] = useState('home');

  const handleOnClick = (props) => {
    setMainContent(props)
  }

  {/* Social media Links */}
  const handleClickSocial = (url) => {
    window.open(url);
  };

  return (
    <div className="App">
      <div id="main">
        {/* Header */}
        <Header handleOnClick={handleOnClick} />

        {/* Main Content */}
        {renderContent(mainContent, handleOnClick)}

        {/* Footer */}
        <Footer handleClickSocial={handleClickSocial} CustomBtn={CustomBtn} />
      </div>
    </div>
  );
};

export default Main;
