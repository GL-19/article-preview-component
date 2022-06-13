import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
  }

`;
