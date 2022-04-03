import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pageData = mapData()[0];
    expect(pageData.title).toBe('');
    expect(pageData.slug).toBe('');
    expect(pageData.footerHtml).toBe('');
    expect(pageData.sections).toEqual([]);
    expect(pageData.menu).toEqual({});
  });

  it('should map data if there is data', () => {
    const pageData = mapData([
      {
        attributes: {
          title: 'Título',
          slug: 'slug',
          footer: '<p>footer</p>',
          sections: [1, 2, 3, 4],
          menu: { a: 'b' },
        },
      },
    ])[0];
    expect(pageData.title).toBe('Título');
    expect(pageData.slug).toBe('slug');
    expect(pageData.footerHtml).toBe('<p>footer</p>');
    expect(pageData.sections).toEqual([1, 2, 3, 4]);
    expect(pageData.menu).toEqual({ a: 'b' });
  });
});
