const divideBottom = require("../img/design/divide-bottom.png");
const footerTexture = require("../img/design/footer-texture.png");

export const Footer = () => {
    return (<>
        <img src={divideBottom} className="app-divide-bottom" alt="nippies fur" />
        <img src={footerTexture} className="texture" alt="nippies fur" />
        <div className="footer-copy">
            <span className="disclaimer">Copyright 2022. Nippies. All Rights Reserved.</span>
            <span className="created-by">Created by <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/0xNdo">@0xNdo</a></span>
        </div>
    </>
    );
}