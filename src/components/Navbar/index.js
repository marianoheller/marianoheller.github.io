import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';



const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
`

const NavStart = styled.div`
  flex-grow: 1;
`

const NavEnd = styled.div`
  
`

const NavItem = styled.div`
  cursor: pointer;
  text-decoration: none;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: georgia, serif;
`


const NavbarContainer = () => (
  <Navbar>

    <NavStart>
      <NavItem>
        <StyledLink to="/">Home</StyledLink>
      </NavItem>
    </NavStart>

    <NavEnd>
      <NavItem>
        <StyledLink to="/">Logout</StyledLink>
      </NavItem>
    </NavEnd>

  </Navbar>
)

export default NavbarContainer
