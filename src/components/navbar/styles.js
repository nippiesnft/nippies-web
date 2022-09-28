import styled from "styled-components";

export const TwitterLogo = styled.img`
width: ${props => props.isMobile ? '20px' : '30px'};
padding-left: ${props => props.isMobile ? '10px' : '20px'};
vertical-align: middle;
margin-top: -10px;
`

export const Container = styled.div`
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

export const NavLogo = styled.img`
width: 100px;
height: 40px;
margin-left: ${props => props.isMobile ? '25px' : '50px'};
cursor: pointer;
`

export const NavLinks = styled.div`
margin-left: auto;
margin-right: ${props => props.isMobile ? '25px' : '50px'};
margin-top: ${props => props.isMobile ? '10px' : '0px'};
`

export const NavLink = styled.a`
text-decoration: none;
color: black;
font-size: ${props => props.isMobile ? '20px' : '25px'};
padding-left: ${props => props.isMobile ? '10px' : '20px'};
padding-right: ${props => props.isMobile ? '10px' : '20px'};
`
