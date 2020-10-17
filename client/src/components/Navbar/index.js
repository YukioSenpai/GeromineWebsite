import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavLogo, NavbarContainer, NavMenu,MobileIcon, NavItem, NavLinks} from './NavbarElements'

export const Navbar = () => {
    return (
        <>
            <Nav>
                lol
                <NavbarContainer>
                    <NavLogo to="/">
                        TEV
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}