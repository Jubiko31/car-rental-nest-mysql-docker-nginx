import React from "react";
import styled from 'styled-components';
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./NavItems";

const NavContainer = styled.div`
    min-height: 68px;
    ${tw`
        flex
        flex-row
        items-center
        justify-between
        w-full
        max-w-screen-2xl
        lg:pl-12
        lg:pr-12
    `}
`

const LogoContainer = styled.div``;

export const Navbar = () => {
    return <NavContainer>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <NavItems />
    </NavContainer>
}