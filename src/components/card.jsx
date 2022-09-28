import styled from "styled-components";

const twitterLogo = require("../img/design/twitter.png")

export const Card = ({ nippie }) => {
    const formattedTwitterStr = `https://twitter.com/${nippie.owner.replace('@', '')}`;

    const Container = styled.div`
        text-align: left;
        margin-bottom: 30px;
    `

    const Image = styled.img`
        outline: 5px solid black;
        max-width: ${window.innerWidth < 700 ? '150px' : '200px'};
    `

    const Details = styled.div`
        margin-left: -5px;
    `

    const Video = styled.video`
        outline: 5px solid black;
        max-width: ${window.innerWidth < 700 ? '150px' : '200px'};
        width: 200;
        outline: 10px solid black;
    `

    const Owner = styled.a`
        color: black;
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
    `

    const TwitterLogo = styled.img`
        color: black;
        max-width: 15px;
        margin-right: 5px;
    `

    const TwitterHandle = styled.a`
        color: black;
        font-size: 18px;
    `

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