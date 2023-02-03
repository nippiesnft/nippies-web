import styled from "styled-components";

export const BottomDivider = styled.img`
width: 100%;
max-height: 150px;
bottom: 0;
left: 0;
`

export const Texture = styled.img`
width: 100%;
background-color: #e8a8ff;
margin-top: -10px;
margin-bottom: -10px;
`

export const DontFollowUs = styled.img`
position: absolute;
left: 50%;
margin-top: 10%;
max-width: ${props => props.isMobile ? '200px' : '500px'};
margin-left: ${props => props.isMobile ? '-100px' : '-250px'};
`

export const NippleTwitter = styled.img`
position: absolute;
left: 39%;
max-width: ${props => props.isMobile ? '75px' : '180px'};
margin-left: ${props => props.isMobile ? '-50px' : '-90px'};
margin-top: ${props => props.isMobile ? '30%' : '25%'};
`

export const NippleInstagram = styled.img`
position: absolute;
left: 59%;
margin-top: ${props => props.isMobile ? '30%' : '25%'};
max-width: ${props => props.isMobile ? '75px' : '180px'};
margin-left: ${props => props.isMobile ? '-25px' : '-90px'};
`

export const FooterCopy = styled.div`
padding-top: 20px;
padding-bottom: 10px;
display: flex;
background: #e8a8ff;
font-size: ${props => props.isMobile ? '10px' : '18px'};
`

export const Disclaimer = styled.span`
align-self: flex-end;
margin-left: 20px;
`

export const CreatedBy = styled.span`
position: absolute;
right: 20px;
`

export const Creator = styled.a`
color: black;
`
