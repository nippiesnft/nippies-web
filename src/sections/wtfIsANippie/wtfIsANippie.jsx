import { useIsMobile } from "../../hooks/useIsMobile";
import { HiddenAnchor } from "../../globalStyles";
import {
    Container,
    LeftSide,
    RightSide,
    Nuppy,
    Title,
    Copy,
    ExploreCTABlack
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
                        {"Nippies is a one-a-day art project that parodied the DeGod's Duppies (now y00ts) art reveal, resulting in 100 nipple-clad creatures and a dreadful community ("}
                        <ExploreCTABlack
                            isMobile={isMobile}
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://twitter.com/Nippies_/status/1660325091790712833?s=20"
                        >
                            learn more
                        </ExploreCTABlack>
                        {")."}
                    </Copy>
                    <Copy isMobile={isMobile}>
                        To make matters worse, we created BitNips. These Bitcoin ordinals are so sequential, eco-friendly, and rug-ready, they'll make your head spin faster than a nip slip at the Super Bowl halftime show.{" "}
                        <ExploreCTABlack
                            isMobile={isMobile}
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://ordinals.com/block/784173"
                        >
                            Explore our Block
                        </ExploreCTABlack>
                        {" / "}
                        <ExploreCTABlack
                            isMobile={isMobile}
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://magiceden.io/ordinals/marketplace/bitnips"
                        >
                            Buy a BitNip
                        </ExploreCTABlack>
                        {"."}
                    </Copy>
                </div>
            </RightSide>
        </Container>
    );
}