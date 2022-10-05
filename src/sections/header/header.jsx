import { useIsMobile } from "../../hooks/useIsMobile";
import {
    Container,
    Texture,
    HeaderLogo,
    TopDivider
} from './styles';
import { HiddenAnchor } from "../../globalStyles";

const divideTop = require("../../img/design/divide-top.png");
const headerTexture = require("../../img/design/header-texture.png");
const headerLogo = require("../../img/design/header-logo.png");

export const Header = () => {
    const isMobile = useIsMobile();

    return (
        <>
            <Container>
                <Texture src={headerTexture} alt="header texture" isMobile={isMobile} />
                <HeaderLogo src={headerLogo} alt="nippies" isMobile={isMobile} tabIndex={0} />
                <TopDivider src={divideTop} alt="nippies fur" />
                <HiddenAnchor tabIndex={-1} id="meet" href="/#">meet</HiddenAnchor>
            </Container>
        </>
    );
}
