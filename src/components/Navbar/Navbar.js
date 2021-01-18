import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink } from '../Navbar/NavElements'

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Mc Donald's</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="">Order History</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="">Sign Out</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="">Checkout</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar;