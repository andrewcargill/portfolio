import logo from './logo.svg';
import './App.css';

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
            <div className="text-border">
              this is some text
            </div>
          </div>

          <div id="action-button">action button</div>
          <div id="bottom-text">bottom text</div>
          <div id="image">image</div>
        </div>
        <div id="bottom-content">bottom</div>
      </div>
    </div>
  );
}

export default App;
