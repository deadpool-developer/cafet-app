import React from 'react'
import {Nav,NavIcon,NavLink,Bars} from "./HomeNavbar";
import "typeface-bungee";
import "./Home.css"


const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavLink to= "/" className="close"  style={{pointerEvents:"none"}} >GREENCHILLI</NavLink>
            <NavIcon onClick= {toggle}>
                <p >Menu</p>
                <Bars/>
            </NavIcon>
        </Nav>
        </>
    )
}

export default Navbar;
