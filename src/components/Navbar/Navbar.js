import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink } from '../Navbar/NavElements'


const toggleHome = () => {
    scroll.scrollToTop();
}

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav id="nav">
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>CEL BITS</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-60}
                            >ABOUT US</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-60}>PROJECTS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="resources"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-60}>RESOURCES</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="startups"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-60}>STARTUPS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-60}>CONTACT US</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;