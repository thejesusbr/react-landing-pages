import * as Styled from './styles';
import { Base } from '../Base';
import mockBase from '../Base/mock';
import { useEffect, useState } from 'react';
import * as qs from 'qs';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const query = qs.stringify(
          {
            populate: ['pages', 'menu', 'menu.logo', 'menu.menu_link'],
          },
          { encodeValuesOnly: true },
        );
        const data = await fetch(`http://localhost:1337/api/pages?${query}`);
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };
    load();
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml } = data;
  const { links, text, link, imgSrc } = menu;
  console.log('Home: ', { links, text, link, imgSrc });

  return (
    <Styled.Wrapper>
      <Base
        links={links}
        footerHtml={footerHtml}
        logoData={{ text, link, imgSrc }}
      >
        <h1>Test</h1>
      </Base>
    </Styled.Wrapper>
  );
}

export default Home;
