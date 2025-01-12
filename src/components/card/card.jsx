import { useIsMobile } from '../../hooks/useIsMobile';
import {
    Container,
    Image,
    BitNipImage,
    Details,
    Name,
    XLogo,
    CTALink,
    BurnedImage
} from './styles'

const xLogo = require("../../img/design/x.webp")

export const Card = ({ nippie, activeArt }) => {
    const isMobile = useIsMobile();
    const formattedTwitterStr = activeArt === "Nippies" && nippie?.owner?.length > 0 ? `https://twitter.com/${nippie?.owner?.replace('@', '')}` : null;

    return (
        <Container>
            {activeArt === "Nippies" && !nippie.burned &&
                <a rel="noopener noreferrer" target="_blank" href={nippie.exchangeArtUrl} tabIndex={-1}>
                    <Image src={nippie.imgUrl} alt={`${nippie.name}`} offset={nippie.offset} />
                </a>
            }
            {activeArt === "Nippies" && nippie.burned &&
                <a rel="noopener noreferrer" target="_blank" href={nippie.exchangeArtUrl} tabIndex={-1}>
                    <BurnedImage src={nippie.imgUrl} alt={`${nippie.name}`} offset={nippie.offset} />
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
                                {nippie?.burned ? <span>{`${nippie.name} (Burned)`}</span> : <span>{nippie.name}</span>}
                            </Name>
                        </div>
                        {nippie?.owner?.length > 0 && !nippie?.burned &&
                            <>
                                <XLogo src={xLogo} alt="twitter-logo" />
                                <CTALink rel="noopener noreferrer" target="_blank" href={formattedTwitterStr}>{nippie.owner}</CTALink>
                            </>}
                        {nippie?.burned &&
                            <span>{nippie?.burned}</span>
                        }
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