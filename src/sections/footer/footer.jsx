import { useIsMobile } from "../../hooks/useIsMobile";
import {
    BottomDivider,
    Texture,
    DontFollowUs,
    NippleTwitter,
    NippleInstagram,
    FooterCopy,
    Disclaimer,
    CreatedBy,
    Creator
} from './styles'
const divideBottom = require("../../img/design/divide-bottom.png");
const footerTexture = require("../../img/design/footer-texture.png");
const dontFollowUs = require("../../img/design/follow-us.png");
const twitterLogo = require("../../img/design/twitter-footer.png");
const instaLogo = require("../../img/design/footer-ig.png");

export const Footer = () => {
    const isMobile = useIsMobile();

    return (<>
        <BottomDivider src={divideBottom} alt="nippies fur" />
        <Texture src={footerTexture} alt="nippies fur" />
        <DontFollowUs src={dontFollowUs} alt="dont follow us" isMobile={isMobile} tabIndex={0} />
        <a rel="noopener noreferrer" target="_blank" href={"https://twitter.com/nippies_"}>
            <NippleTwitter src={twitterLogo} alt="nippie twitter logo" isMobile={isMobile} />
        </a>
        <a rel="noopener noreferrer" target="_blank" href={"https://instagram.com/nippiesnft"}>
            <NippleInstagram src={instaLogo} alt="nippie instagram logo" isMobile={isMobile} />
        </a>
        <FooterCopy isMobile={isMobile}>
            <Disclaimer tabIndex={0}>Copyright 2022. Nippies. All Rights Reserved.</Disclaimer>
            <CreatedBy tabIndex={0}>Created by <Creator rel="noopener noreferrer" target="_blank" href="https://twitter.com/0xNdo">@0xNdo</Creator>.</CreatedBy>
        </FooterCopy>
    </>
    );
}