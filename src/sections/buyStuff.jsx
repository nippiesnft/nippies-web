import styled from "styled-components";
import { HiddenAnchor } from "../styles";
import { useIsMobile } from "../hooks/useIsMobile";

const divideTop = require("../img/design/divide-top.png");
const divideBottom = require("../img/design/divide-bottom.png");
const buyStuffTitle = require("../img/design/buy-stuff.png");
const buyStuffDigital = require("../img/design/buy-stuff-digital.png");
const buyStuffPhysical = require("../img/design/buy-stuff-physical-soon.png");
const buyStuffTexture = require("../img/design/buy-stuff-texture.png");

const Title = styled.img`
left: 50%;
position: absolute;
margin-top: 32%;
max-width: ${props => props.isMobile ? '200px' : '500px'};
margin-left: ${props => props.isMobile ? '-100px' : '-250px'};
`

const Texture = styled.img`
width: 100%;
background-color: #e8a8ff;
margin-top: -10px;
margin-bottom: -10px;
z-index: 20;
`

const DivideBottom = styled.img`
width: 100%;
`

const DivideTop = styled.img`
width: 100%;
`

const DigitalMerchImage = styled.img`
max-width: 500px;
left: 55%;
position: absolute;
margin-top: 30%;
width: 30%;
`

const DigitalMerchLabel = styled.span`
max-width: 500px;
left: 52%;
position: absolute;
margin-top: 60%;
width: 30%;
color: white;
font-size: ${props => props.isMobile ? '32px' : '80px'};
`

const PhysicalMerchImage = styled.img`
max-width: 500px;
left: 13%;
position: absolute;
margin-top: 28%;
width: 30%;
`

const PhysicalMerchLabel = styled.span`
max-width: 500px;
left: 13%;
position: absolute;
margin-top: 60%;
width: 30%;
color: white;
font-size: ${props => props.isMobile ? '32px' : '80px'};
`

export const BuyStuff = () => {
    const isMobile = useIsMobile();
    
    return (
        <>
            <HiddenAnchor id="shop" href="/#">shop</HiddenAnchor>
            <DivideBottom src={divideBottom} alt="nippie bottom divider" />
            <Title src={buyStuffTitle} alt="Buy Stuff" isMobile={isMobile} />
            <Texture src={buyStuffTexture} alt="texture" />
            <a rel="noopener noreferrer" target="_blank" href="https://exchange.art/series/Nippies/nfts" alt="buy nippies on exchange art">
                <DigitalMerchImage src={buyStuffDigital} alt="buy nippie nfts" />
                <DigitalMerchLabel isMobile={isMobile}>Digital</DigitalMerchLabel>
            </a>
            <PhysicalMerchImage src={buyStuffPhysical} alt="buy physical nippie merch" />
            <PhysicalMerchLabel isMobile={isMobile}>Physical</PhysicalMerchLabel>
            <HiddenAnchor id="wtf" href="/#">wtf</HiddenAnchor>
            <DivideTop src={divideTop} alt="nippie top divider" />
        </>
    );
}