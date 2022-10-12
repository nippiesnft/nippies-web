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
const divideTopLong = require("../../img/design/divide-top-long.png");
const divideBottom = require("../../img/design/divide-bottom.png");
const divideBottomLong = require("../../img/design/divide-bottom-long.png");
const buyStuffTitle = require("../../img/design/buy-stuff.png");
const buyStuffDigital = require("../../img/design/buy-stuff-digital.png");
const buyStuffPhysical = require("../../img/design/buy-stuff-physical-soon.png");
const buyStuffTexture = require("../../img/design/buy-stuff-texture.png");

export const BuyStuff = () => {
    const isMobile = useIsMobile();
    
    return (
        <>
            <HiddenAnchor tabIndex={-1}  id="shop" href="/#">shop</HiddenAnchor>
            <DivideBottom src={isMobile ? divideBottom : divideBottomLong} alt="nippie bottom divider" />
            <Title src={buyStuffTitle} alt="Buy Stuff" isMobile={isMobile} tabIndex={0} />
            <Texture src={buyStuffTexture} alt="texture" />
            <a rel="noopener noreferrer" target="_blank" href="https://exchange.art/series/Nippies/nfts" alt="buy nippies on exchange art">
                <DigitalMerchImage src={buyStuffDigital} alt="buy nippie nfts" />
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://exchange.art/series/Nippies/nfts" alt="buy nippies on exchange art">
                <DigitalMerchLabel isMobile={isMobile}>Digital</DigitalMerchLabel>
            </a>
            <PhysicalMerchImage tabIndex={0} src={buyStuffPhysical} alt="physical merch coming soon" />
            <PhysicalMerchLabel tabIndex={-1} isMobile={isMobile}>Physical</PhysicalMerchLabel>
            {!isMobile && <HiddenAnchor tabIndex={-1} id="wtf" href="/#">wtf</HiddenAnchor>}
            <DivideTop src={isMobile ? divideTop : divideTopLong} alt="nippie top divider" />
        </>
    );
}