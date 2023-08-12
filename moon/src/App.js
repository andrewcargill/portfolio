import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import Work from "./components/Work";
import About from "./components/About";
import Tutorials from "./components/Tutorials";
import Main from "./Main";
import ContactPage from "./components/ContactPage";




function App() {
  return (
    <div className="App">
      <div id="main">

        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<HomeContent />} />
            <Route path='/main' element={<Main />} />
            <Route path='/portfolio' element={<Work />} />
            <Route path='/about' element={<About />} />
            <Route path='/tutorials' element={<Tutorials />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
      
      </div>
  );
}

export default App;
