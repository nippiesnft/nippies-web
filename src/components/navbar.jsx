import styled from "styled-components";
import { useIsMobile } from "../hooks/useIsMobile";

const navLogo = require("../img/design/nav-logo.png");
const navTwitter = require("../img/design/nav-twitter.png");

const TwitterLogo = styled.img`
width: ${props => props.isMobile ? '20px' : '30px'};
padding-left: ${props => props.isMobile ? '10px' : '20px'};
vertical-align: middle;
margin-top: -10px;
`

const Container = styled.div`
width: 100%;
display: flex;
position: sticky;
top: 0px;
max-height: 100px;
background-color: #a1efff;
padding-top: 15px;
padding-bottom: 15px;
z-index: 10;
margin-top: ${props => props.isMobile ? '-200px' : '-250px'};
`;

const NavLogo = styled.img`
width: 100px;
height: 40px;
margin-left: ${props => props.isMobile ? '25px' : '50px'};
cursor: pointer;
`

const NavLinks = styled.div`
margin-left: auto;
margin-right: ${props => props.isMobile ? '25px' : '50px'};
margin-top: ${props => props.isMobile ? '10px' : '0px'};
`

const NavLink = styled.a`
text-decoration: none;
color: black;
font-size: ${props => props.isMobile ? '20px' : '25px'};
padding-left: ${props => props.isMobile ? '10px' : '20px'};
padding-right: ${props => props.isMobile ? '10px' : '20px'};
`

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