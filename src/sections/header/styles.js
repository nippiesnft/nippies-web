import styled from "styled-components";

export const Container = styled.div`
position: relative;
z-index: 200;
`

export const Texture = styled.img`
width: 100%;
background-color: #e8a8ff;
margin-top: -10px;
margin-bottom: -10px;
z-index: 200;
max-height: ${props => props.isMobile ? '250px' : '550px'};
`

export const HeaderLogo = styled.img`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
margin-top: 25px;
max-height: ${props => props.isMobile ? '200px' : '500px'};
z-index: 201;
`

export const TopDivider = styled.img`
width: 100%;
max-height: 150px;
position: relative;
z-index: 200;
`
