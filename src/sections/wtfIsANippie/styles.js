import styled from "styled-components";

export const Container = styled.div`
display: flex;
min-height: ${props => props.isMobile ? '0px' : '35vh'};
`

export const Nuppy = styled.img`
position: absolute;
z-index: -1;
max-height: ${props => props.isMobile ? '250px' : '500px'};
left: ${props => props.isMobile ? '-55px' : '0px'};
margin-top: ${props => props.isMobile ? '110px' : '0px'};
`

export const LeftSide = styled.div`
width: 40%;
`

export const RightSide = styled.div`
width: 60%;
text-align: left;
max-width: 600px;
margin-right: 1.5em;
margin-bottom: 10px;
`

export const Title = styled.img`
width: 100%;
margin-bottom: ${props => props.isMobile ? '20px' : '40px'};
`
