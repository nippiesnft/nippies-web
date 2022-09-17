const divideBottom = require("../img/design/divide-bottom.png");
const footerTexture = require("../img/design/footer-texture.png");
const dontFollowUs = require("../img/design/follow-us.png");


export const Footer = ({isMobile}) => {
    const followUsStyles = {
        maxWidth: isMobile ? 200 : 500,
        marginLeft: isMobile ? -100 : -250,
        left: '50%',
        position: 'absolute',
        marginTop: '10%',
    };

    return (<>
        <img src={divideBottom} className="app-divide-bottom" alt="nippies fur" />
        <img src={footerTexture} className="texture" alt="nippies fur" />
        <img src={dontFollowUs} style={followUsStyles} />
        <div className="footer-copy">
            <span className="disclaimer">Copyright 2022. Nippies. All Rights Reserved.</span>
            <span className="created-by">Created by <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/0xNdo">@0xNdo</a></span>
        </div>
    </>
    );
}