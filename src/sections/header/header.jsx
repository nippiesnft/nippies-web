import { useIsMobile } from "../../hooks/useIsMobile";
import {
    Container,
    Texture,
    HeaderLogo,
    TopDivider
} from './styles';

const divideTop = require("../../img/design/divide-top.png");
const headerTexture = require("../../img/design/header-texture.png");
const headerLogo = require("../../img/design/header-logo.png");

export const Header = () => {
    const isMobile = useIsMobile();

    return (
        <Container>
            <Texture src={headerTexture} alt="header texture" isMobile={isMobile} />
            <HeaderLogo src={headerLogo} alt="header logo" isMobile={isMobile} />
            <TopDivider src={divideTop} alt="nippies fur" />
        </Container>
    );
}
