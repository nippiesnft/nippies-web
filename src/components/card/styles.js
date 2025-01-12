import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 30px;
`

export const Image = styled.img`
    transform: ${props => props.offset ? `rotate(${props.offset}deg)` : 'rotate(0)'};
    max-width: ${window.innerWidth < 700 ? '175px' : '215px'};
    &:hover {
        transform: ${props => props.offset ? `rotate(${props.offset}deg) scale(1.03)` : 'rotate(0)'};
        -webkit-transform: ${props => props.offset ? `rotate(${props.offset}deg) scale(1.03)` : 'rotate(0)'};
        transition: transform 0.5s ease;
    }
`

export const BurnedImage = styled.img`
    filter: brightness(0.7); /* Lower brightness to make it look inactive */
    opacity: 0.7; /* Adds a faded effect */
    transform: ${props => props.offset ? `rotate(${props.offset}deg)` : 'rotate(0)'};
    max-width: ${window.innerWidth < 700 ? '175px' : '215px'};
    &:hover {
        transform: ${props => props.offset ? `rotate(${props.offset}deg) scale(1.03)` : 'rotate(0)'};
        -webkit-transform: ${props => props.offset ? `rotate(${props.offset}deg) scale(1.03)` : 'rotate(0)'};
        transition: transform 0.5s ease;
    }
`;
  
export const BitNipImage = styled(Image)`
margin: 12px;
max-width: ${window.innerWidth < 700 ? '140px' : '180px'};
border: 6px solid black;
`

export const Details = styled.div`
    text-align: left;
    margin-left: ${props => props.isMobile ? '20px' : '40px'};
`

export const Name = styled.a`
    color: black;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
`

export const XLogo = styled.img`
    color: black;
    max-width: 15px;
    margin-right: 6px;
`

export const CTALink = styled.a`
    color: black;
    font-size: 18px;
`