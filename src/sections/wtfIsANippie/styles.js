import styled from "styled-components";

export const Container = styled.div`
display: flex;
min-height: ${props => props.isMobile ? '0px' : '68vh'};
`

export const Nuppy = styled.img`
position: absolute;
z-index: -1;
max-height: ${props => props.isMobile ? '250px' : '475px'};
left: ${props => props.isMobile ? '-55px' : '0px'};
margin-top: ${props => props.isMobile ? '140px' : '12%'};
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
min-height: ${props => props.isMobile ? '0px' : '350px'};
`

export const Title = styled.img`
width: 100%;
margin-bottom: ${props => props.isMobile ? '20px' : '30px'};
margin-top: ${props => props.isMobile ? '0px' : '40px'};
max-width: ${props => props.isMobile ? '200px' : '500px'};
`

export const Copy = styled.p`
font-size: ${props => props.isMobile ? '12px' : '18px'};
`
