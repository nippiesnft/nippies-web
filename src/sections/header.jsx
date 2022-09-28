import styled from "styled-components";
import { useIsMobile } from "../hooks/useIsMobile";
import { HiddenAnchor } from "../styles";

const divideTop = require("../img/design/divide-top.png");
const headerTexture = require("../img/design/header-texture.png");
const headerLogo = require("../img/design/header-logo.png");

const Container = styled.div`
position: relative;
z-index: 20;
`

const Texture = styled.img`
width: 100%;
background-color: #e8a8ff;
margin-top: -10px;
margin-bottom: -10px;
z-index: 20;
max-height: ${props => props.isMobile ? '250px' : '550px'};
`

const HeaderLogo = styled.img`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
margin-top: 25px;
max-height: ${props => props.isMobile ? '200px' : '500px'};
`

const TopDivider = styled.img`
width: 100%;
max-height: 150px;
position: relative;
z-index: 20;
`


export const Header = () => {
    const isMobile = useIsMobile();

    return (
        <Container>
            <Texture src={headerTexture} alt="header texture" isMobile={isMobile} />
            <HeaderLogo src={headerLogo} alt="header logo" isMobile={isMobile} />
            <TopDivider src={divideTop} alt="nippies fur" />
            <HiddenAnchor id="meet" href="/#">meet</HiddenAnchor>
        </Container>
    );
}
