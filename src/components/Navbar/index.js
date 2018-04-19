import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';



const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  font-family: 'Open Sans', sans-serif;
  justify-content: center;
`

const NavStart = styled.div`
  display: flex;
  flex-direction: row;
`

const NavEnd = styled.div`
  display: flex;
  flex-direction: row;
`

const NavItem = styled.div`
  cursor: pointer;
  text-decoration: none;
  padding: 0 1em;
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    font-weight: 900;
    font-size: 1.2rem;
    transition: font-size 0.2s ease-out;
  }
`
const activeStyle = {
  fontWeight: "bold",
  fontSize: "1.2em",
  transition: "font-size 0.5s ease-in"
}

const NavbarContainer = () => (
  <Navbar>

    <NavStart>
      <NavItem>
        <StyledLink to="/" exact activeStyle={activeStyle}>Home</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/portfolio" activeStyle={activeStyle}>
          Portfolio
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/blog" activeStyle={activeStyle}>
          Blog
        </StyledLink>
      </NavItem>
    </NavStart>

  </Navbar>
)

export default NavbarContainer
