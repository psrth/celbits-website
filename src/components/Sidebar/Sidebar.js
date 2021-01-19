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
                        <SidebarLink to="home" smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={toggle}>HOME</SidebarLink>
                        <SidebarLink to="about" smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={toggle}>ABOUT US</SidebarLink>
                        <SidebarLink to="projects" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onClick={toggle}>PROJECTS</SidebarLink>
                        <SidebarLink to="resources" 
                        onClick={toggle}
                        smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>RESOURCES</SidebarLink>
                        <SidebarLink to="startups" smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={toggle}>STARTUPS</SidebarLink>
                        <SidebarLink to="contact" smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={toggle}>CONTACT US</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </div>
    )
}

export default Sidebar;