import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
    }

    .title {
        text-align: center;
        margin: 10px;
        margin-top: 50px;
        font-family: Roboto, sans-serif;
    }

`;
