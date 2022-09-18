const divideBottom = require("../img/design/divide-bottom.png");
const footerTexture = require("../img/design/footer-texture.png");
const dontFollowUs = require("../img/design/follow-us.png");
const twitterLogo = require("../img/design/twitter-footer.png");
const instaLogo = require("../img/design/footer-ig.png");

export const Footer = ({ isMobile }) => {
    const instaStyles = {
        maxWidth: isMobile ? 50 : 150,
        marginLeft: isMobile ? -25 : -75,
        left: '58%',
        position: 'absolute',
        marginTop: '30%'
    };

    const twitterStyles = {
        maxWidth: isMobile ? 50 : 150,
        marginLeft: isMobile ? -25 : -75,
        left: '38%',
        position: 'absolute',
        marginTop: '30%'
    };

    const followUsStyles = {
        maxWidth: isMobile ? 200 : 500,
        marginLeft: isMobile ? -100 : -250,
        left: '50%',
        position: 'absolute',
        marginTop: '10%',
    };

    const footerCopyStyles = {
        fontSize: isMobile ? 14 : 28
    }

    return (<>
        <img src={divideBottom} className="app-divide-bottom" alt="nippies fur" />
        <img src={footerTexture} className="texture" alt="nippies fur" />
        <img src={dontFollowUs} style={followUsStyles} alt="dont follow us" />
        <a rel="noopener noreferrer" target="_blank" href={"https://twitter.com/nippies_"}>
            <img src={twitterLogo} style={twitterStyles} alt="nippie twitter logo" />
        </a>
        <a rel="noopener noreferrer" target="_blank" href={"https://instagram.com/nippiesnft"}>
            <img src={instaLogo} style={instaStyles} alt="nippie insta logo" />
        </a>
        <div className="footer-copy" style={footerCopyStyles}>
            <span className="disclaimer">Copyright 2022. Nippies. All Rights Reserved.</span>
            <span className="created-by">Created by <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/0xNdo">@0xNdo</a></span>
        </div>
    </>
    );
}