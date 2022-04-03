import { mapMenu, mapMenuLinks } from './map-menu';

const menuData = {
  id: 2,
  logo_text: 'SunlightIO',
  logo_link: '#home',
  new_tab: false,
  logo: {
    data: {
      id: 4,
      attributes: {
        url: 'https://res.cloudinary.com/singularity-softworks/image/upload/v1647652186/logo_024cecb55c.png',
      },
    },
  },
  menu_link: [
    {
      id: 3,
      link_text: 'Intro',
      url: '#intro',
      new_tab: false,
    },
    {
      id: 4,
      link_text: 'Benefícios',
      url: '#beneficios',
      new_tab: false,
    },
    {
      id: 5,
      link_text: 'Produtos e Serviços',
      url: '#gallery',
      new_tab: false,
    },
    {
      id: 6,
      link_text: 'Depoimentos',
      url: '#depoimentos',
      new_tab: false,
    },
    {},
  ],
};

describe('map-menu', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.imgSrc).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu to match required keys and values', () => {
    const menu = mapMenu(menuData);
    expect(menu.newTab).toBe(menuData.new_tab);
    expect(menu.text).toBe(menuData.logo_text);
    expect(menu.imgSrc).toBe(menuData.logo.data.attributes.url);
    expect(menu.link).toBe(menuData.logo_link);
    expect(menu.links[0].url).toBe(menuData.menu_link[0].url);
  });

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links if value is passed', () => {
    const links = mapMenuLinks(menuData.menu_link);
    expect(links[0].text).toEqual(menuData.menu_link[0].link_text);
    expect(links[0].url).toEqual(menuData.menu_link[0].url);
    expect(links[0].newTab).toEqual(menuData.menu_link[0].new_tab);
  });
});
