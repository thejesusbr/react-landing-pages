import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>Text</TextComponent>);
    const texto = screen.getByText('Text');
    expect(texto).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(<TextComponent>Text</TextComponent>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
