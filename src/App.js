import React, { useEffect, useState } from 'react';
import { useWindowSize } from './hooks'; 
import './App.css';

const headerTexture = require("./img/design/header-texture.png");
const headerLogo = require("./img/design/header-logo.png");
const divideTop = require("./img/design/divide-top.png");
const divideBottom = require("./img/design/divide-bottom.png");

function App() {
  const [width, height] = useWindowSize();
  const [isMobile, setIsMobile] = useState(window?.innerWidth < 1024);

  const headerLogoStyles = {
    maxWidth: isMobile ? 150 : 350,
    marginLeft: isMobile ? -75 : -175,
  };

  const headerTextureStyles = {
    maxHeight: isMobile ? 250 : 550,

  }

  useEffect(() => {
    setIsMobile(width < 1024);
  }, [width])

  return (
    <div className="app">
      <img src={headerTexture} className="header-texture" style={headerTextureStyles} alt="header texture"/>
      <img src={headerLogo} className="header-logo" style={headerLogoStyles} alt="header logo"/>
      <img src={divideTop} className="app-divide-top" alt="nippies fur"/>
      <img src={divideBottom} className="app-divide-bottom" alt="nippies fur"/>
    </div>
  );
}

export default App;
