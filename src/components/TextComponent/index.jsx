import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children }) => {
  return <Styled.SimpleText>{children}</Styled.SimpleText>;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
