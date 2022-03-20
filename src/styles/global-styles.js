import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Importação de fonte movida para index.html, devido ao aviso de mudaça no CSSOM API */
  *
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html
  {
    font-size: 62.5%;
  }

  body
  {
    font-size: 2.4rem;
    font-family: ${({ theme }) => theme.font.default};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6
  {
    font-family: ${({ theme }) => theme.font.titles};
    text-transform: uppercase;
  }
`;
