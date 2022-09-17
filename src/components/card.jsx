const twitterLogo = require("../img/design/twitter.png")

export const Card = ({ nippie }) => {
    const formattedTwitterStr = `https://twitter.com/${nippie.owner.replace('@', '')}`;
    return (
        <div className="card">
            {nippie?.imgUrl && <a href={nippie.exchangeArtUrl}>
                <img src={nippie.imgUrl} className="card-img" style={{maxWidth: window.innerWidth < 700 ? 150 : 200}}/>
            </a>}
            {nippie?.videoUrl &&
                <a href={nippie.exchangeArtUrl}>
                    <video width={window.innerWidth < 700 ? 150 : 200} height={window.innerWidth < 700 ? 150 : 200} className="card-img" autoplay muted>
                        <source src={nippie.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </a>
            }
            <div className="card-details">
                <a href={nippie.exchangeArtUrl} className="card-owner">
                    <span>{nippie.name}</span>
                </a>
                <div>
                    <img src={twitterLogo} className="twitter-logo" />
                    <a className="twitter-handle" href={formattedTwitterStr}>{nippie.owner}</a>
                </div>
            </div>
        </div>
    );
}