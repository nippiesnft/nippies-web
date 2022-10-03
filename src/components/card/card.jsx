import { useIsMobile } from '../../hooks/useIsMobile';
import {
    Container,
    Image,
    Details,
    Owner,
    TwitterLogo,
    TwitterHandle
} from './styles'

const twitterLogo = require("../../img/design/twitter.png")

export const Card = ({ nippie }) => {
    const isMobile = useIsMobile();
    const formattedTwitterStr = `https://twitter.com/${nippie.owner.replace('@', '')}`;

    return (
        <Container>
            {nippie?.imgUrl && <a rel="noopener noreferrer" target="_blank" href={nippie.exchangeArtUrl}>
                <Image src={nippie.imgUrl} alt={`${nippie.name}`} offset={nippie.offset}/>
            </a>}
            <Details isMobile={isMobile}>
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