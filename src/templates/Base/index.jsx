import P from 'prop-types';
import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export const Base = ({ links, logoData, footerHtml, children }) => {
  console.log('Base: ', links);
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
        <GoTop />
      </Styled.Container>
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
};
