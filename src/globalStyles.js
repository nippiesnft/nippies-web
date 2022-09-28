import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        text-align: center;
        width: 100%;
        font-family: "chauncy-pro";
        background-color: #a1efff;
        scroll-behavior: smooth;
    }

    html {
        scroll-behavior: smooth;
    }
`;

export const HiddenAnchor = styled.a`
    line-height: 0; 
    font-size: 0;
    color: transparent; 
`

