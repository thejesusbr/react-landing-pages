import styled, { css } from 'styled-components';

const titleSizes = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  normal: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  large: (theme) => css`
    font-size: ${theme.font.sizes.xLarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
};

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
