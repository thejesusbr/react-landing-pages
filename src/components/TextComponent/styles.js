import styled, { css } from 'styled-components';

export const SimpleText = styled.p`
  ${({ theme }) =>
    css`
      font-size: ${theme.font.sizes.normal};
    `}
`;
