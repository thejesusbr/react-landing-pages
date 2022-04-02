import P from 'prop-types';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ html }) => {
  return (
    <SectionContainer>
      <Styled.Container>
        <TextComponent>{html}</TextComponent>
      </Styled.Container>
    </SectionContainer>
  );
};

Footer.propTypes = {
  html: P.string.isRequired,
};
