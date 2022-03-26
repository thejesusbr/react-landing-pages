import P from 'prop-types';
import * as Styled from './styles';

export const Menu = ({ children }) => {
  return <Styled.MyStyle>{children}</Styled.MyStyle>;
};

Menu.propTypes = {
  children: P.node.isRequired,
};
