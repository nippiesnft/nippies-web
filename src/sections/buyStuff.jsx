const divideTop = require("../img/design/divide-top.png");
const divideBottom = require("../img/design/divide-bottom.png");
const buyStuffTitle = require("../img/design/buy-stuff.png");
const buyStuffDigital = require("../img/design/buy-stuff-digital.png");
const buyStuffPhysical = require("../img/design/buy-stuff-physical-soon.png");

const buyStuffTexture = require("../img/design/buy-stuff-texture.png");

export const BuyStuff = ({ isMobile }) => {
    const buyStuffStyles = {
        maxWidth: isMobile ? 200 : 500,
        marginLeft: isMobile ? -100 : -250,
        left: '50%',
        position: 'absolute',
        marginTop: '32%',
    };

    const buyStuffDigitalStyles = {
        maxWidth: 500,
        left: '55%',
        position: 'absolute',
        marginTop: '34%',
        width: '30%',
    };

    const buyStuffPhysicalStyles = {
        maxWidth: 500,
        left: '15%',
        position: 'absolute',
        marginTop: '32%',
        width: '30%',
    };

    return (
        <div className="buy-stuff">
            <img src={divideBottom} className="divide-bottom" alt="nippie bottom divider" />
            <img src={buyStuffTitle} style={buyStuffStyles} alt="Buy Stuff" />
            <img src={buyStuffTexture} className="texture" alt="texture" />
            <a rel="noopener noreferrer" target="_blank" href="https://exchange.art/series/Nippies/nfts" alt="buy nippies on exchange art">
                <img src={buyStuffDigital} style={buyStuffDigitalStyles} alt="buy nippie nfts" />
            </a>
            <img src={buyStuffPhysical} style={buyStuffPhysicalStyles} alt="buy physical nippie merch" />
            <img src={divideTop} className="divide-top" alt="nippie top divider" />
        </div>
    );
}