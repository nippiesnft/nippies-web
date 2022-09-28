import {
    Container,
    Image,
    Video,
    Details,
    Owner,
    TwitterLogo,
    TwitterHandle
} from './styles'

const twitterLogo = require("../../img/design/twitter.png")

export const Card = ({ nippie }) => {
    const formattedTwitterStr = `https://twitter.com/${nippie.owner.replace('@', '')}`;

    return (
        <Container>
            {nippie?.imgUrl && <a rel="noopener noreferrer" target="_blank" href={nippie.exchangeArtUrl}>
                <Image src={nippie.imgUrl} alt={`${nippie.name}`} />
            </a>}
            {nippie?.videoUrl &&
                <a rel="noopener noreferrer" target="_blank" href={nippie.exchangeArtUrl}>
                    <Video width={window.innerWidth < 700 ? 150 : 200} height={window.innerWidth < 700 ? 150 : 200} muted>
                        <source src={nippie.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </Video>
                </a>
            }
            <Details>
                <Owner rel="noopener noreferrer" target="_blank" href={nippie.exchangeArtUrl} >
                    <span>{nippie.name}</span>
                </Owner>
                {nippie.owner && <div>
                    <TwitterLogo src={twitterLogo} alt="twitter-logo" />
                    <TwitterHandle rel="noopener noreferrer" target="_blank" href={formattedTwitterStr}>{nippie.owner}</TwitterHandle>
                </div>}
            </Details>
        </Container>
    );
}