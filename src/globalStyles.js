import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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

export default GlobalStyle;
