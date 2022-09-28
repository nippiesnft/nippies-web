import React, { useEffect, useState } from 'react';
import { Header } from './sections/header';
import { MeetTheNippies } from './sections/meetTheNippies';
import { BuyStuff } from './sections/buyStuff';
import { Footer } from './sections/footer';
import { WtfIsANippie } from './sections/wtfIsANippie';
import Nippies from './nippiesData.json';
import { shuffleArray } from './helpers/shuffle';
import { NavBar } from './components/navbar';
import GlobalStyle from './globalStyles';

function App() {
  const [shuffledNippies, setShuffledNippies] = useState(null);

  useEffect(() => {
    setShuffledNippies(shuffleArray(Nippies));
  }, [])

  return (
    <>
        <GlobalStyle />
        <Header />
        <NavBar />
        <MeetTheNippies shuffledNippies={shuffledNippies} />
        <BuyStuff />
        <WtfIsANippie />
        <Footer />
    </>
  );
}

export default App;
