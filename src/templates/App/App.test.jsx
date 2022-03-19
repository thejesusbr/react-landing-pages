import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import Home from './App';

test('renders learn react link', () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Oi',
  }).parentElement;

  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', 'blue');
});
