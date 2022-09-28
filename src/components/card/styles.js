import styled from "styled-components";

export const Container = styled.div`
    text-align: left;
    margin-bottom: 30px;
`

export const Image = styled.img`
    outline: 5px solid black;
    max-width: ${window.innerWidth < 700 ? '150px' : '200px'};
`

export const Details = styled.div`
    margin-left: -5px;
`

export const Video = styled.video`
    outline: 5px solid black;
    max-width: ${window.innerWidth < 700 ? '150px' : '200px'};
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