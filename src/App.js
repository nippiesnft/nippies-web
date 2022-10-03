import React, { useEffect, useState } from 'react';
import { Header } from './sections/header/header';
import { MeetTheNippies } from './sections/meetTheNippies/meetTheNippies';
import { BuyStuff } from './sections/buyStuff/buyStuff';
import { Footer } from './sections/footer/footer';
import { WtfIsANippie } from './sections/wtfIsANippie/wtfIsANippie';
import { NavBar } from './components/navbar/navbar';
import { GlobalStyle, HiddenAnchor } from './globalStyles';
import { getNippies } from './helpers/nippiesData';

function App() {
  const [nippies, setNippies] = useState(null);

  useEffect(() => {
    // shuffle nippies on initial load
    setNippies(getNippies("Shuffle"));
  }, [])

  return (
    <>
        <GlobalStyle />
        <Header />
        <HiddenAnchor tabIndex={-1} id="meet" href="/#">meet</HiddenAnchor>
        <NavBar />
        <MeetTheNippies nippies={nippies} setNippies={setNippies}/>
        <HiddenAnchor tabIndex={-1}  id="shop" href="/#">shop</HiddenAnchor>
        <BuyStuff />
        <WtfIsANippie />
        <Footer />
    </>
  );
}

export default App;
