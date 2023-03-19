
import React from 'react';
import './App.css';
import Button from './components/Button';
import test from './media/images/pic.jpg';
import shop from './media/images/shop.png';

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
            <h2>you need a website!</h2>
          </div>
          <div id="nav" className="header-element">
            <Button />
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
                <button id="buy-button"
                  onClick={sayHello}>
                  <div id="buy-basket">
                    <img id="shop-pic" src={shop} alt="Logo" />
                  </div>
                  <div id="buy text">email me
                  </div>
                </button>
             
                <div id="buy-tagline">
                  It doesn't have to cost the world to bring your ideas
                  to life. Get the web working for you today!
                </div>
            </div>
          </div>
          <div id="bottom-text">
            <div className="text-border-white left-margin-desktop">
                Bottom Text
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
