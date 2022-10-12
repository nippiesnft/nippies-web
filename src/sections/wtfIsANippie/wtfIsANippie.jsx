import { useIsMobile } from "../../hooks/useIsMobile";
import { HiddenAnchor } from "../../globalStyles";
import {
    Container,
    LeftSide,
    RightSide,
    Nuppy,
    Title,
    Copy
} from './styles';

const wtf = require("../../img/design/wtf.png");
const nuppy = require("../../img/nippies/nuppy-transparent.png");

export const WtfIsANippie = () => {
    const isMobile = useIsMobile();

    return (
        <Container isMobile={isMobile}>
            <LeftSide>
                <Nuppy src={nuppy} alt="nuppy the nippie" isMobile={isMobile} />
            </LeftSide>
            <RightSide isMobile={isMobile}>
                <>
                    <Title src={wtf} alt="wtf is a nippie" isMobile={isMobile} tabIndex={0} />
                    {isMobile && <HiddenAnchor tabIndex={-1} id="wtf" href="/#">wtf</HiddenAnchor>}
                </>
                <div tabIndex={0}>
                    <Copy isMobile={isMobile}>
                        Nippies is a one-a-day art project that spanned the months between the initial Duppies announcement and the y00ts art reveal, concluding with a total cast of 84 nipple-clad creatures.
                    </Copy>
                    <Copy isMobile={isMobile}>
                        With the support of our rowdy collector base, the original collection will eventually feature 100 hand-drawn characters and additional Nippie art experiences.
                    </Copy>
                </div>
            </RightSide>
        </Container>
    );
}