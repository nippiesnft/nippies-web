import React, { useEffect, useState } from 'react';
import { useWindowSize } from './hooks'; 
import './App.css';
import { Header } from './sections/header';
import { MeetTheNippies } from './sections/meetTheNippies';
import { BuyStuff } from './sections/buyStuff';
import { Footer } from './sections/footer';
import { WtfIsANippie } from './sections/wtfIsANippie';

function App() {
  const [width, height] = useWindowSize();
  const [isMobile, setIsMobile] = useState(window?.innerWidth < 1024);

  useEffect(() => {
    setIsMobile(width < 1024);
  }, [width])

  return (
    <div className="app">
      <Header isMobile={isMobile} />
      <MeetTheNippies isMobile={isMobile} />
      <BuyStuff isMobile={isMobile} />
      <WtfIsANippie isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </div>
  );
}

export default App;
