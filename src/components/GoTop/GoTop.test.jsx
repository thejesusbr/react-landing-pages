import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GoTop } from '.';

describe('<GoTop />', () => {
  it('should render', () => {
    renderTheme(<GoTop />);
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#',
    );
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(<GoTop />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        position: fixed;
        background: #f3f3f3;
        border: 1px solid #a02b2d;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 3.2rem;
        height: 3.2rem;
        bottom: 2rem;
        right: 2rem;
        z-index: 6;
        opacity: 0.7;
      }

      .c1 {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
      }

      <a
        class="c0"
        href="#"
      >
        <svg
          aria-label="Go to top"
          class="c1"
          fill="currentColor"
          focusable="false"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>
            Go to top
          </title>
          <path
            d="M0 0h24v24H0V0z"
            fill="none"
          />
          <path
            d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"
          />
        </svg>
      </a>
    `);
  });
});
