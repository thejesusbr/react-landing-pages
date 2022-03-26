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
    font-family: ${({ theme }) => theme.font.default};
    font-size: ${({ theme }) => theme.font.sizes.normal};
    color: ${({ theme }) => theme.colors.darkColor}
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
