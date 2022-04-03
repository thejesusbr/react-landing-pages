export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const { attributes = {} } = data;
    return {
      title: attributes?.title || '',
      slug: attributes?.slug || '',
      footerHtml: attributes?.footer || '',
      sections: attributes?.sections || [],
      menu: attributes?.menu || {},
    };
  });
};

// const dados = require('./dados.json');
// console.log(mapData(dados.data));
