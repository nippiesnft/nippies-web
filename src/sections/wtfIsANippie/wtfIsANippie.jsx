import { useIsMobile } from "../../hooks/useIsMobile";
import { HiddenAnchor } from "../../globalStyles";
import {
    Container,
    LeftSide,
    RightSide,
    Nuppy,
    Title
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
                <div tabIndex={0}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </RightSide>
        </Container>
    );
}