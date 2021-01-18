import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink } from '../Navbar/NavElements'

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">CEL BITS</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="">HOME</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="">ABOUT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="">PROJECTS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="">RESOURCES</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="">CONTACT US</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to="">Checkout</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar;