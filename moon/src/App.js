
import './App.css';
import test from './media/images/pic.jpg';

function App() {
  return (
    <div className="App">
      <div id="main">
        <div id="header">
          <div id="logo" className="header-element">X</div>
          <div id="center-image" className="header-element">I</div>
          <div id="nav" className="header-element">N</div>
        </div>
        <div id="main-content">
          <div id="header-text">
            <div className="text-border left-margin-desktop">
            What do you say to me. You didnt say in words. 
            What do you say to me. You didnt say in words. 
            What do you say to me. You didnt say in words. 
            What do you say to me. You didnt say in words. 
            What do you say to me. You didnt say in words. 
            What do you say to me. You didnt say in words. 
            What do you say to me. You didnt say in words. 
            What do you say to me. You didnt say in words. 
            What do you say to me. You didnt say in words. 
      
            </div>
          </div>

          <div id="action-button">
            <div className="text-border left-margin-desktop">
                Button
            </div>
          </div>
          <div id="bottom-text">
            <div className="text-border left-margin-desktop">
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
