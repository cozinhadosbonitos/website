import { createGlobalStyle } from 'styled-components'
import { SiteThemeProps } from '../theme'
// @ts-ignore
import * as sanitizeCss from 'sanitize.css'

export const GlobalStyle = createGlobalStyle<SiteThemeProps>`
  ${sanitizeCss}
  @import url('https://fonts.googleapis.com/css?family=Karla|Lato');
  :root {
    --white: ${({ theme }) => theme.white};
    --black: ${({ theme }) => theme.black};
    --blue: ${({ theme }) => theme.blue};
    --primary-color: ${({ theme }) => theme.primaryColor};
    --primary-color-text: var(--black);
  }
  html {
    font-family: lato;
  }
  main {
    flex: 1 0 auto;
    h1,h2,h3,h4,h5,h6 {
      font-family: Karla;
      color: var(--black);
    }
    a {
      color: var(--blue);
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:active,
  a:hover {
    outline-width: 0;
  }
  html {
    font: 112.5%/1.45em georgia, serif;
    overflow-y: scroll;
  }
  h1,
  h2,
  h3
  h4,
  h5,
  h6 {
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    line-height: 1.1;
  }
  h1 {
    font-size: 2.25rem;
  }
  h2 {
    font-size: 1.62671rem;
  }
  h3 {
    font-size: 1.38316rem;
  }
  h4 {
    font-size: 1rem;
  }
  h5 {
    font-size: 0.85028rem;
  }
  h6 {
    font-size: 0.78405rem;
  }
`
