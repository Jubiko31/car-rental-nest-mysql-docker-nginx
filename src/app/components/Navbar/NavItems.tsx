import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive/index';
import menuStyles from './menuStyles';

const ItemsContainer = styled.ul`
    ${tw`
        flex
        list-none
    `}
`;

const NavItem = styled.li<{ menu?: any }>`
    ${tw`
        text-sm
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
        cursor-pointer
    `}

    ${({ menu }) => menu && css`
        ${tw`
            text-white
            text-xl
            no-underline
            mb-3
            focus:text-white
        `}
    `}
`;

const NavLink = styled.a<{ menu?: any }>`
    ${tw`
        no-underline
        text-black
    `}
    ${({ menu }) => menu && css`
        ${tw`
            text-white
        `}
    `}
`

export const NavItems = () => {
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })
    if (isMobile) {
        return (
        <Menu right styles={ menuStyles }>
            <ItemsContainer>
                <NavItem menu>
                    <NavLink href="/" menu>Home</NavLink>
                </NavItem>
                <NavItem menu>
                    <NavLink href="/" menu>Cars</NavLink>
                </NavItem>
                <NavItem menu>
                    <NavLink href="/" menu>Services</NavLink>
                </NavItem>
                <NavItem menu>
                    <NavLink href="/" menu>Contact Us</NavLink>
                </NavItem>
            </ItemsContainer>   
        </Menu>
        )
    }
    return <ItemsContainer>
        <NavItem>
            <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/">Cars</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/">Services</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/">Contact Us</NavLink>
        </NavItem>
    </ItemsContainer>
}