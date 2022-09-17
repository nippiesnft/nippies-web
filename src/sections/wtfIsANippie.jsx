const wtf = require("../img/design/wtf.png");
const nuppy = require("../img/nippies/nuppy-transparent.png");

export const WtfIsANippie = ({ isMobile }) => {

    const rowStyles = {
        minHeight: isMobile ? 0 : '35vh',
    }

    const nuppyStyles = {
        maxHeight: isMobile ? 250 : 500,
        left: isMobile ? '-55px' : 0,
        position: 'absolute',
        zIndex: -1,
        marginTop: isMobile ? 150 : 0,
    };

    const wtfTitleStyles = {
        marginBottom: isMobile ? 20 : 40,
    }

    return (
        <>
            <div className="row wtf" style={rowStyles}>
                <div className="left-column">
                    <img src={nuppy} style={nuppyStyles} alt="nuppy the nippie" />
                </div>
                <div className="right-column wtf-copy">
                    <div>
                        <img className="wtf-title" src={wtf} style={wtfTitleStyles} alt="wtf is a nippie" />
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </div>
            </div>
        </>
    );
}