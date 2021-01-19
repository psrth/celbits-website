import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink } from '../Navbar/NavElements'

const Navbar = ({ toggle }) => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">CEL BITS</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="hero">HOME</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">ABOUT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">PROJECTS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="resources">RESOURCES</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">CONTACT US</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar;