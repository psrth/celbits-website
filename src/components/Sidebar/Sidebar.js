import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SideElements'

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <div>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
            

                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="hero" onClick={toggle}>HOME</SidebarLink>
                        <SidebarLink to="about" onClick={toggle}>ABOUT US</SidebarLink>
                        <SidebarLink to="projects" onClick={toggle}>PROJECTS</SidebarLink>
                        <SidebarLink to="resources" onClick={toggle}>RESOURCES</SidebarLink>
                        <SidebarLink to="startups" onClick={toggle}>STARTUPS</SidebarLink>
                        <SidebarLink to="contact" onClick={toggle}>CONTACT US</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </div>
    )
}

export default Sidebar;