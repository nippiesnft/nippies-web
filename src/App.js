import './App.css';

const divideTop = require("./img/design/divide-top.png");
const divideBottom = require("./img/design/divide-bottom.png");
const comingSoon = require("./img/design/comin-soon.png");
const nuppy = require("./img/nippies/nuppy-transparent.png");

function App() {
  const isMobile = window?.innerWidth < 1024;

  const nuppyStyles = {
    left: isMobile ? 0 : '15%',
    bottom: isMobile ? '15px' : '30px',
  }

  const comingSoonStyles = {
    maxHeight: isMobile ? 150 : 275,
  }

  return (
    <div className="app">
      <img src={divideTop} className="app-divide-top" alt="nippies fur"/>
      <img src={comingSoon} className="coming-soon" style={comingSoonStyles} alt="comin soon" />
      <img src={nuppy} className="nuppy" style={nuppyStyles} alt="nuppy the nippie" />
      <img src={divideBottom} className="app-divide-bottom" alt="nippies fur"/>
    </div>
  );
}

export default App;
