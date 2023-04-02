import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import About from "./pages/about";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from "./pages/home";
import Page from "./page";

function App() {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/page' element={<Page/>} />

    </Routes>
    </Router>

    
  );
}

export default App;
