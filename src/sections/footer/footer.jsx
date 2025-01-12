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
const divideBottomLong = require("../../img/design/divide-bottom-long.png");
const footerTexture = require("../../img/design/footer-texture.png");
const dontFollowUs = require("../../img/design/follow-us.png");
const twitterLogo = require("../../img/design/twitter-footer.png");
const instaLogo = require("../../img/design/footer-ig.png");

export const Footer = () => {
    const isMobile = useIsMobile();

    return (<>
        <BottomDivider src={isMobile ? divideBottom : divideBottomLong} alt="nippies fur" />
        <Texture src={footerTexture} alt="nippies fur" />
        <DontFollowUs src={dontFollowUs} alt="dont follow us" isMobile={isMobile} tabIndex={0} />
        <a rel="noopener noreferrer" target="_blank" href={"https://twitter.com/TheNippies"}>
            <NippleTwitter src={twitterLogo} alt="nippie twitter logo" isMobile={isMobile} />
        </a>
        <a rel="noopener noreferrer" target="_blank" href={"https://instagram.com/thenippies"}>
            <NippleInstagram src={instaLogo} alt="nippie instagram logo" isMobile={isMobile} />
        </a>
        <FooterCopy isMobile={isMobile}>
            <Disclaimer tabIndex={0}>The Nippies © 2022–2025. All rights reserved.</Disclaimer>
            <CreatedBy tabIndex={0}>Website by <Creator rel="noopener noreferrer" target="_blank" href="https://twitter.com/justbenfyi">Ben</Creator>.</CreatedBy>
        </FooterCopy>
    </>
    );
}