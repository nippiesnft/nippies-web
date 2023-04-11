import { useIsMobile } from '../../hooks/useIsMobile';
import {
    Container,
    Image,
    BitNipImage,
    Details,
    Name,
    TwitterLogo,
    CTALink
} from './styles'

const twitterLogo = require("../../img/design/twitter.png")

export const Card = ({ nippie, activeArt }) => {
    const isMobile = useIsMobile();
    const formattedTwitterStr = `https://twitter.com/${nippie?.owner?.replace('@', '')}`;

    return (
        <Container>
            {activeArt === "Nippies" &&
                <a rel="noopener noreferrer" target="_blank" href={nippie.exchangeArtUrl} tabIndex={-1}>
                    <Image src={nippie.imgUrl} alt={`${nippie.name}`} offset={nippie.offset} />
                </a>
            }
            {activeArt === "BitNips" &&
                <a rel="noopener noreferrer" target="_blank" href={nippie.inscriptionUrl} tabIndex={-1}>
                    <BitNipImage src={nippie.imgUrl} alt={`${nippie.name}`} offset={nippie.offset} />
                </a>
            }
            <Details isMobile={isMobile}>
                {activeArt === "Nippies" &&
                    <div>
                        <div>
                            <Name rel="noopener noreferrer" target="_blank" href={nippie.exchangeArtUrl} >
                                <span>{nippie.name}</span>
                            </Name>
                        </div>
                        <TwitterLogo src={twitterLogo} alt="twitter-logo" />
                        <CTALink rel="noopener noreferrer" target="_blank" href={formattedTwitterStr}>{nippie.owner}</CTALink>
                    </div>
                }
                {activeArt === "BitNips" &&
                    <div>
                        <div>
                            <Name rel="noopener noreferrer" target="_blank" href={nippie.inscriptionUrl} >
                                <span>{nippie.name}</span>
                            </Name>
                        </div>
                        <CTALink rel="noopener noreferrer" target="_blank" href={nippie.inscriptionUrl}>{`Inscription #${nippie.inscriptionNumber}`}</CTALink>
                    </div>
                }
            </Details>
        </Container>
    );
}