import React, { useEffect, useState } from 'react';
import { Header } from './sections/header/header';
import { MeetTheNippies } from './sections/meetTheNippies/meetTheNippies';
import { BuyStuff } from './sections/buyStuff/buyStuff';
import { Footer } from './sections/footer/footer';
import { WtfIsANippie } from './sections/wtfIsANippie/wtfIsANippie';
import { NavBar } from './components/navbar/navbar';
import { GlobalStyle } from './globalStyles';
import { getNippies } from './helpers/nippiesData';

function App() {
  const [nippies, setNippies] = useState(null);

  useEffect(() => {
    // shuffle nippies on initial load
    setNippies(getNippies("Shuffle", "Nippies"));
  }, [])

  return (
    <>
        <GlobalStyle />
        <Header />
        <NavBar />
        <MeetTheNippies nippies={nippies} setNippies={setNippies}/>
        <BuyStuff />
        <WtfIsANippie />
        <Footer />
    </>
  );
}

export default App;
