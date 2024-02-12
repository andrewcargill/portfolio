import React from "react";
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import Work from "./components/Work";
import About from "./components/About";
import Tutorials from "./components/Tutorials";
import Main from "./Main";
import ContactPage from "./components/ContactPage";
import DrumMachinePage from "./components/DrumMachinePage";
import CubePage from "./components/CubePage";
import AutoTextPage from "./components/AutoTextPage";
import Soundfx from "./components/SoundFX";
import SoundfxTone from "./components/SoundFx/SoundFxTone";
import SoundfxToneTwo from "./components/SoundFx/SoundFxToneTwo";



function App() {
  return (
    <div className="App">
      <div id="main">

        {/* <Router basename={process.env.PUBLIC_URL}> */}
          <Header />
          <Routes>
            <Route path='/' element={<HomeContent />} />
            <Route path='/main' element={<Main />} />
            <Route path='/portfolio' element={<Work />} />
            <Route path='/about' element={<About />} />
            <Route path='/tutorials' element={<Tutorials />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/drum' element={<DrumMachinePage />} />
            <Route path='/autotext' element={<AutoTextPage />} />
            <Route path='/cube' element={<CubePage />} />
            <Route path='/x' element={<Soundfx />} />
            <Route path='/tone' element={<SoundfxTone />} />
            <Route path='/tone2' element={<SoundfxToneTwo />} />
     
          </Routes>
          <Footer />
        {/* </Router> */}
      </div>
      
      </div>
  );
}

export default App;
