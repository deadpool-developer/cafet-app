import React, {useState} from 'react'
import Navbar from "../Home/index";
import SideBar from '../SideBar';
import "typeface-courier-prime";
import { Link } from 'react-router-dom';
import {
    HeroContainer,
    HeroContent, 
    HeroH1,
    HeroP,
    HeroBtn,
    HeroItem} 
    from "./HeroElements";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <HeroContainer>
            <Navbar toggle= {toggle}/>
            <SideBar isOpen = {isOpen} toggle= {toggle}/>
            <HeroContent>
                <HeroItem>
                    <HeroH1 style={{fontFamily: 'Courier Prime, monospace'}}>We’ve got something</HeroH1>
                    <HeroP style={{color: "#FFFFFF",
textShadow: "0 0 10px #FFFFFF"}}>What can we get you?</HeroP>
                    <Link to="/main">
                    <HeroBtn>Place Order</HeroBtn>
                    </Link>
                </HeroItem>
            </HeroContent>
        </HeroContainer>
        </>
    )
}

export default Hero;
