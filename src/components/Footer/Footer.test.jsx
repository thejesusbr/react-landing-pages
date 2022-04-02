import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    renderTheme(<Footer html="<h1>Children</h1>" />);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(<Footer html="<h1>Children</h1>" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
