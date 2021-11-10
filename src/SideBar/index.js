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
                    <SidebarLink to="/">Login</SidebarLink>
                    <SidebarLink to="/">SignUp</SidebarLink>
                    <SidebarLink to="/">About</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/">Order Now</SidebarRoute>
                </SideBtnWrap>
            </SidebarContainer>
        </div>
    )
}

export default SideBar
