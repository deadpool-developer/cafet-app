import React, {useState} from 'react'
import Navbar from "../Home/index";
import SideBar from '../SideBar';
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
                    <HeroH1>We’ve got something</HeroH1>
                    <HeroP>What can we get you?</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItem>
            </HeroContent>
        </HeroContainer>
        </>
    )
}

export default Hero;
