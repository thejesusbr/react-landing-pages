import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';
import mock from './mock';

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(
      <Base {...mock}>
        <h1>Test</h1>
      </Base>,
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Test' })).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(
      <Base {...mock}>
        <h1>Teste</h1>
      </Base>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
