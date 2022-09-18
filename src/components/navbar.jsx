const navLogo = require("../img/design/nav-logo.png");
const navTwitter = require("../img/design/nav-twitter.png");


export const NavBar = ({ isMobile }) => {
    const navBarStyles = {
        marginTop: isMobile ? -100 : -200
    }
    const navLogoStyles = {
        width: 100,
        height: 40,
        marginLeft: isMobile ? 25 : 50,
    }

    const navTwitterStyles = {
        width: isMobile ? 20 : 30,
        paddingLeft: isMobile ? 10 : 20,
        paddingRight: isMobile ? 10 : 20,
        verticalAlign: 'middle',
        marginTop: -10
    }

    const navLinks = {
        marginLeft: 'auto',
        marginRight: isMobile ? 25 : 50,
        marginTop: isMobile ? 10 : 0,
    }

    const navLink = {
        fontSize: isMobile ? 20 : 25,
        paddingLeft: isMobile ? 10 : 20,
        paddingRight: isMobile ? 10 : 20,
    }

    return (
        <div className="navbar" style={navBarStyles}>
            <img src={navLogo} style={navLogoStyles} alt="nippies logo" />
            <div style={navLinks}>
                <a className="nav-link" style={navLink} href="#meet">Meet</a>
                <a className="nav-link" style={navLink} href="#shop">Shop</a>
                <a className="nav-link" style={navLink} href="#wtf">Wtf</a>
                <a rel="noopener noreferrer" target="_blank" href={"https://twitter.com/nippies_"}>
                    <img src={navTwitter} style={navTwitterStyles} alt="red twitter logo" />
                </a>
            </div>
        </div>
    );
}