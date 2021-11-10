import React from 'react'
import {Nav,NavIcon,NavLink,Bars} from "./HomeNavbar";

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavLink to= "/">GREENCHILLI</NavLink>
            <NavIcon onClick= {toggle}>
                <p>Menu</p>
                <Bars/>
            </NavIcon>
        </Nav>
        </>
    )
}

export default Navbar;
