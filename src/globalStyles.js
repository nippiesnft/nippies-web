import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        text-align: center;
        width: 100%;
        font-family: "chauncy-pro";
        background-color: #a1efff;
        scroll-behavior: smooth;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        scroll-behavior: smooth;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
    }
`;

export const HiddenAnchor = styled.a`
    line-height: 0; 
    font-size: 0;
    color: transparent; 
`

