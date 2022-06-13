import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;

    @media screen and (max-width: ${({ theme }) => theme.screenSize.mobileLg}) {
      font-size: 93.75%;
    }

    @media screen and (max-width: ${({ theme }) => theme.screenSize.mobile}) {
      font-size: 87.5%;
    }
  }

  body {
    font-family: 'Manrope', sans-serif;
  }

`;
