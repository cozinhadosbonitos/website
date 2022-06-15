import * as React from 'react'
import styled from 'styled-components'
import { Container } from './layout-components'

const StyledFooter = styled.footer`
  color: var(--primary-color-text);
  background: var(--primary-color);
  padding: 1rem 0;
`

export const Footer = () => (
  <StyledFooter>
    <Container>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Container>
  </StyledFooter>
)
