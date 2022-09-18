const divideTop = require("../img/design/divide-top.png");
const headerTexture = require("../img/design/header-texture.png");
const headerLogo = require("../img/design/header-logo.png");

export const Header = ({ isMobile }) => {
    const headerLogoStyles = {
        maxHeight: isMobile ? 200 : 500,
    };

    const headerTextureStyles = {
        maxHeight: isMobile ? 250 : 550,
    };

    return (<div className="header">
        <a id="header" />
        <img src={headerTexture} className="texture" style={headerTextureStyles} alt="header texture" />
        <img src={headerLogo} className="header-logo" style={headerLogoStyles} alt="header logo" />
        <img src={divideTop} className="app-divide-top" alt="nippies fur" />
        <a id="meet"></a>
    </div>);
}
