import styled from "styled-components";
import { useIsMobile } from "../hooks/useIsMobile";

const divideBottom = require("../img/design/divide-bottom.png");
const footerTexture = require("../img/design/footer-texture.png");
const dontFollowUs = require("../img/design/follow-us.png");
const twitterLogo = require("../img/design/twitter-footer.png");
const instaLogo = require("../img/design/footer-ig.png");

const BottomDivider = styled.img`
width: 100%;
max-height: 150px;
bottom: 0;
left: 0;
`

const Texture = styled.img`
width: 100%;
background-color: #e8a8ff;
margin-top: -10px;
margin-bottom: -10px;
`

const DontFollowUs = styled.img`
position: absolute;
left: 50%;
margin-top: 10%;
max-width: ${props => props.isMobile ? '200px' : '500px'};
margin-left: ${props => props.isMobile ? '-100px' : '-250px'};
`

const NippleTwitter = styled.img`
position: absolute;
left: 39%;
max-width: ${props => props.isMobile ? '50px' : '180px'};
margin-left: ${props => props.isMobile ? '-25px' : '-90px'};
margin-top: ${props => props.isMobile ? '30%' : '25%'};
`

const NippleInstagram = styled.img`
position: absolute;
left: 59%;
margin-top: ${props => props.isMobile ? '30%' : '25%'};
max-width: ${props => props.isMobile ? '50px' : '180px'};
margin-left: ${props => props.isMobile ? '-25px' : '-90px'};
`

const FooterCopy = styled.div`
padding-top: 20px;
padding-bottom: 10px;
display: flex;
background: #e8a8ff;
font-size: ${props => props.isMobile ? '12px' : '28px'};
`

const Disclaimer = styled.span`
align-self: flex-end;
margin-left: 10px;
`

const CreatedBy = styled.span`
position: absolute;
right: 10px;
color: black;
`

export const Footer = () => {
    const isMobile = useIsMobile();

    return (<>
        <BottomDivider src={divideBottom} alt="nippies fur" />
        <Texture src={footerTexture} alt="nippies fur" />
        <DontFollowUs src={dontFollowUs} alt="dont follow us" isMobile={isMobile} />
        <a rel="noopener noreferrer" target="_blank" href={"https://twitter.com/nippies_"}>
            <NippleTwitter src={twitterLogo} alt="nippie twitter logo" isMobile={isMobile} />
        </a>
        <a rel="noopener noreferrer" target="_blank" href={"https://instagram.com/nippiesnft"}>
            <NippleInstagram src={instaLogo} alt="nippie instagram logo" isMobile={isMobile} />
        </a>
        <FooterCopy isMobile={isMobile}>
            <Disclaimer>Copyright 2022. Nippies. All Rights Reserved.</Disclaimer>
            <CreatedBy>Created by <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/0xNdo">@0xNdo</a>.</CreatedBy>
        </FooterCopy>
    </>
    );
}