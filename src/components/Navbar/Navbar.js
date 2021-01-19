import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink } from '../Navbar/NavElements'
import Image1 from '../../imgs/cel.png'

const toggleHome = () => {
    scroll.scrollToTop();
}

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav id="nav">
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <img width="50px" style={{ paddingBottom: '10px'}} src={Image1} />CEL BITS
                    </NavLogo>
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
                            offset={-80}
                            >ABOUT US</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>PROJECTS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="resources"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>RESOURCES</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="startups"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>STARTUPS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>CONTACT US</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;