import { useIsMobile } from "../../hooks/useIsMobile";
import { HiddenAnchor } from "../../globalStyles";
import {
    Title,
    Texture,
    DivideBottom,
    DivideTop,
    DigitalMerchImage,
    DigitalMerchLabel,
    PhysicalMerchImage,
    PhysicalMerchLabel
} from './styles';

const divideTop = require("../../img/design/divide-top.png");
const divideBottom = require("../../img/design/divide-bottom.png");
const buyStuffTitle = require("../../img/design/buy-stuff.png");
const buyStuffDigital = require("../../img/design/buy-stuff-digital.png");
const buyStuffPhysical = require("../../img/design/buy-stuff-physical-soon.png");
const buyStuffTexture = require("../../img/design/buy-stuff-texture.png");

export const BuyStuff = () => {
    const isMobile = useIsMobile();
    
    return (
        <>
            <DivideBottom src={divideBottom} alt="nippie bottom divider" />
            <Title src={buyStuffTitle} alt="Buy Stuff" isMobile={isMobile} />
            <Texture src={buyStuffTexture} alt="texture" />
            <a rel="noopener noreferrer" target="_blank" href="https://exchange.art/series/Nippies/nfts" alt="buy nippies on exchange art">
                <DigitalMerchImage src={buyStuffDigital} alt="buy nippie nfts" />
                <DigitalMerchLabel isMobile={isMobile}>Digital</DigitalMerchLabel>
            </a>
            <PhysicalMerchImage src={buyStuffPhysical} alt="buy physical nippie merch" />
            <PhysicalMerchLabel isMobile={isMobile}>Physical</PhysicalMerchLabel>
            {!isMobile && <HiddenAnchor id="wtf" href="/#">wtf</HiddenAnchor>}
            <DivideTop src={divideTop} alt="nippie top divider" />
        </>
    );
}