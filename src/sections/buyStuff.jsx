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
        marginTop: '30%',
        width: '30%',
    };

    const digitalLabelStyles = {
        maxWidth: 500,
        left: '52%',
        position: 'absolute',
        marginTop: '60%',
        width: '30%',
        color: 'white',
        fontSize: isMobile ? '32px' : '80px',
    };

    const physicalLabelStyles = {
        maxWidth: 500,
        left: '13%',
        position: 'absolute',
        marginTop: '60%',
        width: '30%',
        color: 'white',
        fontSize: isMobile ? '32px' : '80px',
    };

    const buyStuffPhysicalStyles = {
        maxWidth: 500,
        left: '13%',
        position: 'absolute',
        marginTop: '28%',
        width: '30%',
    };

    return (
        <>
            <div className="buy-stuff">
                <a id="shop"></a>
                <img src={divideBottom} className="divide-bottom" alt="nippie bottom divider" />
                <img src={buyStuffTitle} style={buyStuffStyles} alt="Buy Stuff" />
                <img src={buyStuffTexture} className="texture" alt="texture" />
                <a rel="noopener noreferrer" target="_blank" href="https://exchange.art/series/Nippies/nfts" alt="buy nippies on exchange art">
                    <img src={buyStuffDigital} style={buyStuffDigitalStyles} alt="buy nippie nfts" />
                    <span style={digitalLabelStyles}>Digital</span>
                </a>
                <img src={buyStuffPhysical} style={buyStuffPhysicalStyles} alt="buy physical nippie merch" />
                <span style={physicalLabelStyles}>Physical</span>
                <a id="wtf"></a>
                <img src={divideTop} className="divide-top" alt="nippie top divider" />
            </div>
        </>
    );
}