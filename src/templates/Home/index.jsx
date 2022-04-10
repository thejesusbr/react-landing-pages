import * as Styled from './styles';
import { Base } from '../Base';
import mockBase from '../Base/mock';
import { useEffect, useState } from 'react';
import * as qs from 'qs';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { useLocation } from 'react-router-dom';
import config from '../../config';

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-zA-Z0-9-]/gi, '');
    const slug = pathname ? pathname : config.defaultSlug;

    const load = async () => {
      try {
        const query = qs.stringify(
          {
            filters: { slug: slug },
            populate: [
              'menu',
              'menu.logo',
              'menu.menu_link',
              'sections',
              'sections.image',
              'sections.image_grid',
              'sections.image_grid.image',
              'sections.text_grid',
              'sections.metadata',
            ],
          },
          { encodeValuesOnly: true },
        );
        // console.log(config.url + query);
        const data = await fetch(config.url + query);
        // const data = await fetch(config.url);
        const json = await data.json();
        if (json.error) throw new Error(json.error);
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };
    load();
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada. | ${config.siteName}`;
    }
    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }
    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml } = data;
  const { links, text, link, imgSrc } = menu;

  return (
    <Styled.Wrapper>
      <Base
        links={links}
        footerHtml={footerHtml}
        logoData={{ text, link, imgSrc }}
      >
        {sections.map((section, index) => {
          const { component } = section;
          if (component === 'section.section-two-columns') {
            return <GridTwoColumns key={index} {...section} />;
          }
          if (component === 'section.section-content') {
            return <GridContent key={index} {...section} />;
          }
          if (component === 'section.section-grid-text') {
            return <GridText key={index} {...section} />;
          }
          if (component === 'section.section-grid-image') {
            return <GridImage key={index} {...section} />;
          }
        })}
      </Base>
    </Styled.Wrapper>
  );
}

export default Home;
