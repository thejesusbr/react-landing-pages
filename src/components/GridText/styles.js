import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextContainer } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextContainer} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      position: relative;
      left: 5rem;
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: ${theme.font.sizes.huge};
      top: -1rem;
      left: -${theme.spacings.xxlarge};
      transform: rotate(5deg);
    }

    @media ${theme.media.lteMedium} {
      ${HeadingContainer}::before {
        font-size: ${theme.font.sizes.xlarge};
        left: -${theme.spacings.large};
      }
    }
  `}
`;
