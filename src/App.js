import React, { useEffect, useState } from 'react';
import { useWindowSize } from './hooks'; 
import './App.css';
import { Header } from './sections/header';
import { MeetTheNippies } from './sections/meetTheNippies';
import { BuyStuff } from './sections/buyStuff';
import { Footer } from './sections/footer';
import { WtfIsANippie } from './sections/wtfIsANippie';
import Nippies from './nippiesData.json';
import { shuffleArray } from './helpers/shuffle';

function App() {
  const [width] = useWindowSize();
  const [isMobile, setIsMobile] = useState(window?.innerWidth < 1024);
  const [shuffledNippies, setShuffledNippies] = useState(null);

  useEffect(() => {
    setIsMobile(width < 1024);
  }, [width])

  useEffect(() => {
    setShuffledNippies(shuffleArray(Nippies));
  }, [])

  return (
    <div className="app">
      <Header isMobile={isMobile} />
      <MeetTheNippies isMobile={isMobile} shuffledNippies={shuffledNippies} />
      <BuyStuff isMobile={isMobile} />
      <WtfIsANippie isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </div>
  );
}

export default App;
