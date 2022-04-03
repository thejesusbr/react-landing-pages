import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pageData = mapData()[0];
    expect(pageData.title).toBe('');
    expect(pageData.slug).toBe('');
    expect(pageData.footerHtml).toBe('');
  });

  it('should map data if there is data', () => {
    const pageData = mapData([
      {
        attributes: {
          title: 'Título',
          slug: 'slug',
          footer: '<p>footer</p>',
        },
      },
    ])[0];
    expect(pageData.title).toBe('Título');
    expect(pageData.slug).toBe('slug');
    expect(pageData.footerHtml).toBe('<p>footer</p>');
  });
});
