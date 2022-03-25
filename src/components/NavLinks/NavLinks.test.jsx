import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render column mode in small screen', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByRole('navigation')).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
