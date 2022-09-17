const divideBottom = require("../img/design/divide-bottom.png");
const footerTexture = require("../img/design/footer-texture.png");

export const Footer = () => {
    return (<>
        <img src={divideBottom} className="app-divide-bottom" alt="nippies fur" />
        <img src={footerTexture} className="texture" alt="nippies fur" />
    </>
    );
}