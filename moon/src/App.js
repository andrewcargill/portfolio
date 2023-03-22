
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import test from './media/images/pic.jpg';
import shop from './media/images/shop.png';
import CustomBtn from './styles/CustomButton.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCheckSquare, faCoffee, faCartShopping)


function sayHello() {
  alert('You clicked me!');
}

function App() {
  return (
    <div className="App">
      <div id="main">
        <div id="header">
          <div id="logo" className="header-element1">
            <p>andy</p>
            <p>design</p>
          </div>
          <div id="center-image" className="header-element2">
            <button className={CustomBtn.btn}>
          you need!
            </button>
          </div>

          <div id="nav" className="header-element-right">
            <button className={CustomBtn.btn}>Images</button>
          </div>
        </div>
        <div id="main-content">
          <div id="header-text">
            <div className="content-no-background left-margin-desktop">
            In a world gone a little crazy I think it's absolutly the
            right time to have a new stunningly custom website made for your business,
             hobby or interest group. > > > > 
            </div>
          </div>

          <div id="action-button">
            <div className="text-border-buy left-margin-desktop box-shadow">
                <button className={`${CustomBtn.light} contact-button`}
                  onClick={sayHello}>
                  <div id="buy-basket">
                  <FontAwesomeIcon icon="cart-shopping" />
                  </div>
                  <div id="buy text">Contact
                  </div>
                </button>
             
                <div id="buy-tagline">
                  It doesn't have to cost the world to bring your ideas
                  to life. Get the web working for you today!
                </div>
            </div>
          </div>
          <div id="bottom-text">
            <div id="bottom-text-content" className="text-border-white left-margin-desktop">
            
              TEXT
            
            </div>
          </div>

          <div id="image">
            <div className="text-border right-margin-desktop">
            <img id="main-pic" src={test} alt="Logo" />
            </div>
          </div>
        </div>
        <div id="footer">
            <div className="text-border">
                Footer
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
