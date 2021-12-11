import React from 'react';
import {
    SidebarContainer,
    CloseIcon, 
    Icon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap}
    from "./SideBarElements";

const SideBar = ({isOpen , toggle}) => {
    return (
        <div>
            <SidebarContainer isOpen= {isOpen} onClick= {toggle}>
                <Icon>
                    <CloseIcon/>
                </Icon>
                <SidebarMenu>
                    <SidebarLink to="/login">Login</SidebarLink>
                    <SidebarLink to="/register">SignUp</SidebarLink>
                    
                    <SidebarLink to="/contact">Contact</SidebarLink>
                    
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/">Order Now</SidebarRoute>
                </SideBtnWrap>
            </SidebarContainer>
        </div>
    )
}

export default SideBar
