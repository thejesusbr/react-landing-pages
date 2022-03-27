import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Style } from '@styled-icons/material-outlined';
import { TextComponent } from '../TextComponent';

export const GridTwoColumns = ({ title, text, imgSrc, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading darkBG={background} uppercase>
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={imgSrc} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  imgSrc: P.string.isRequired,
  background: P.bool,
};
