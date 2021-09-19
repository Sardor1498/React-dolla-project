import React from 'react'
import { headerLink } from '../../routes/routes'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SideBtnWrap,
    SidebarMenu,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {/* {
                        headerLink.map((item, index) => (
                            <SidebarLink
                                key={item + index}
                                to={item.url}
                                onClick={toggle}
                            >
                                    {item.name}
                            </SidebarLink>
                        ))
                    } */}
                    <SidebarLink
                        to="about"
                        onClick={toggle}
                    >
                        About
                    </SidebarLink>
                    <SidebarLink
                        to="discover"
                        onClick={toggle}
                    >
                        Discover
                    </SidebarLink>
                    <SidebarLink
                        to="services"
                        onClick={toggle}
                    >
                        Services
                    </SidebarLink>
                    <SidebarLink
                        to="signup"
                        onClick={toggle}
                    >
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
