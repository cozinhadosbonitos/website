import * as React from 'react'
import styled from 'styled-components'
import { Container } from '@chakra-ui/react'

const NavList = styled.ul`
  display: flex;
  align-items: middle;
  justify-content: space-around;
`

const StyledNav = styled.nav`
  border: black 1px solid;
  border-left-width: 0px;
  border-right-width: 0px;
`

export const Navigation = () => (
  <StyledNav>
    <Container maxWidth="4xl">
      <NavList>
        <li>All Recipes</li>
        <li>Sweet</li>
        <li>Savoury</li>
      </NavList>
    </Container>
  </StyledNav>
)
