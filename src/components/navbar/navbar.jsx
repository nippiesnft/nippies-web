import { useIsMobile } from "../../hooks/useIsMobile";
import {
    Container,
    NavLogo,
    NavLinks,
    NavLink,
    TwitterLogo
} from './styles';

const navLogo = require("../../img/design/nav-logo.png");
const navTwitter = require("../../img/design/nav-twitter.png");

export const NavBar = () => {
    const isMobile = useIsMobile();

    return (
        <Container isMobile={isMobile}>
            <NavLogo src={navLogo} alt="nippies logo" onClick={() => window.scrollTo(0, 0)} isMobile={isMobile} />
            <NavLinks isMobile={isMobile}>
                <NavLink href="#meet" isMobile={isMobile}>Meet</NavLink>
                <NavLink href="#shop" isMobile={isMobile}>Shop</NavLink>
                <NavLink href="#wtf" isMobile={isMobile}>Wtf</NavLink>
                <a rel="noopener noreferrer" target="_blank" href={"https://twitter.com/nippies_"}>
                    <TwitterLogo src={navTwitter} alt="red twitter logo" isMobile={isMobile} />
                </a>
            </NavLinks>
        </Container>
    );
}