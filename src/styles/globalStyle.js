import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

    body {
        margin: 0;
        padding: 0;
        background: #F5F5F5;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 15px;
        overflow-x: hidden !important;
        height: 100%;
    }

    html {
        height: 100%;
        overflow-x: hidden !important;
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
        color: inherit;

        &:hover,
        &:focus,
        &:visited {
            text-decoration: none;
            color: inherit;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    b,
    i {
        margin: 0;
        /* word-wrap: break-word; */
    }

    textarea {
        resize: none;
    }
`;

export default GlobalStyle;