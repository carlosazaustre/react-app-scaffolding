import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #2196f3;
    --primary-light-color: #6ec6ff;
    --primary-dark-color: #0069c0;
    --primary-font: 'Lato';
  }
  body {
    font-family: var(--primary-font), sans-serif;
    margin: 0;
    padding: 0;
  }
`;
