import styled from "styled-components";
import { useIsMobile } from "../hooks/useIsMobile";

const wtf = require("../img/design/wtf.png");
const nuppy = require("../img/nippies/nuppy-transparent.png");

const Container = styled.div`
display: flex;
min-height: ${props => props.isMobile ? '0px' : '35vh'};
`

const Nuppy = styled.img`
position: absolute;
z-index: -1;
max-height: ${props => props.isMobile ? '250px' : '500px'};
left: ${props => props.isMobile ? '-55px' : '0px'};
margin-top: ${props => props.isMobile ? '110px' : '0px'};
`

const LeftSide = styled.div`
width: 40%;
`

const RightSide = styled.div`
width: 60%;
text-align: left;
max-width: 600px;
margin-right: 1.5em;
margin-bottom: 10px;
`

const Title = styled.img`
width: 100%;
margin-bottom: ${props => props.isMobile ? '20px' : '40px'};
`

export const WtfIsANippie = () => {
    const isMobile = useIsMobile();

    return (
        <Container isMobile={isMobile}>
            <LeftSide>
                <Nuppy src={nuppy} alt="nuppy the nippie" isMobile={isMobile} />
            </LeftSide>
            <RightSide>
                <>
                    <Title src={wtf} alt="wtf is a nippie" isMobile={isMobile} />
                </>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </RightSide>
        </Container>
    );
}