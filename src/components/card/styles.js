import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 30px;
`

export const Image = styled.img`
    transform: ${props => props.offset ? `rotate(${props.offset}deg)` : 'rotate(0)'};
    max-width: ${window.innerWidth < 700 ? '175px' : '215px'};
`

export const Details = styled.div`
    text-align: left;
    margin-left: ${props => props.isMobile ? '20px' : '40px'};
`

export const Owner = styled.a`
    color: black;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
`

export const TwitterLogo = styled.img`
    color: black;
    max-width: 15px;
    margin-right: 5px;
`

export const TwitterHandle = styled.a`
    color: black;
    font-size: 18px;
`