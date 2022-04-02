import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    background: ${theme.colors.lightColor};
    border: 1px solid ${theme.colors.secondaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${theme.font.sizes.large};
    height: ${theme.font.sizes.large};
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
    opacity: 0.7;
  `}
`;
