import styled, { css } from 'styled-components';

const titleSizes = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.normal};
  `,
  normal: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  large: (theme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaQueryFont(theme)};
  `,
};

const mediaQueryFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.large};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, darkBG, size, uppercase }) => css`
    color: ${darkBG ? theme.colors.white : theme.colors.primaryColor};
    ${titleSizes[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
