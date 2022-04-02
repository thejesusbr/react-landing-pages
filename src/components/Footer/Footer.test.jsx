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
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        text-align: center;
      }

      .c1 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
      }

      .c2 {
        font-size: 2.4rem;
      }

      .c0 {
        max-width: 120rem;
        margin: auto;
        padding: 3.2rem;
      }

      <div
        class="c0"
      >
        <footer
          class="c1"
        >
          <div
            class="c2"
          >
            <h1>
              Children
            </h1>
          </div>
        </footer>
      </div>
    `);
  });
});
