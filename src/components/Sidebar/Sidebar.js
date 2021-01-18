import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SideElements'

export const Sidebar = () => {
    return (
        <div>
            <SidebarContainer>
                <Icon>
                    <CloseIcon />
                </Icon>
            </SidebarContainer>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="">Home</SidebarLink>
                    <SidebarLink to="">Order History</SidebarLink>
                    <SidebarLink to="">Sign Out</SidebarLink>
                    <SidebarLink to="">Home</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute>yuhh</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </div>
    )
}

export default Sidebar;