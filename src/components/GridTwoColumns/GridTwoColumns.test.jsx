import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from '.';
import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render a two column grid', () => {
    renderTheme(<GridTwoColumns {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
