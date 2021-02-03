import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }
  
  body {
    height: 100vh;
  }
`;

export default GlobalStyles;
