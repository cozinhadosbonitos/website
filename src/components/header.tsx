import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Container } from './layout-components'
import Icon from '../icons/logo.svg'

const StyledHeader = styled.header`
  color: var(--primary-color);
  padding: 3rem 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  h1 {
    margin: 0;
  }
  svg {
    fill: currentColor;
  }
`

export const Header = () => (
  <StyledHeader>
    <Container>
      <Link to="/">
        <Icon />
      </Link>
    </Container>
  </StyledHeader>
)
