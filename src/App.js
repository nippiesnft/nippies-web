import React, { useEffect, useState } from 'react';
import { Header } from './sections/header/header';
import { MeetTheNippies } from './sections/meetTheNippies/meetTheNippies';
import { BuyStuff } from './sections/buyStuff/buyStuff';
import { Footer } from './sections/footer/footer';
import { WtfIsANippie } from './sections/wtfIsANippie/wtfIsANippie';
import Nippies from './nippiesData.json';
import { shuffleArray } from './helpers/shuffle';
import { NavBar } from './components/navbar/navbar';
import { GlobalStyle, HiddenAnchor } from './globalStyles';

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
        <HiddenAnchor id="shop" href="/#">shop</HiddenAnchor>
        <BuyStuff />
        <WtfIsANippie />
        <Footer />
    </>
  );
}

export default App;
