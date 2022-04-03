export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      attributes: {
        title = '',
        slug = '',
        footer: footerHtml = '',
        sections = [],
        menu = {},
      } = '',
    } = data;
    return {
      title,
      slug,
      footerHtml,
      sections,
      menu,
    };
  });
};

// const dados = require('./dados.json');
// console.log(mapData(dados.data));
