import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import carLogo from '../../../assets/logo.png';

const LogoContainer = styled.div`
    min-height: 68px;
    ${tw`
        flex
        items-center
    `};
`
const LogoText = styled.div`
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
    `};
`

const Image = styled.div`
    width: auto;
    img {
        width: auto;
        height: 100%;
    } 
    ${tw`h-9`}
`
export const Logo = () => {
    return <LogoContainer>
        <Image>
            <img src={carLogo} alt="logo"/>
        </Image>
        <LogoText>
            OurAuto.
        </LogoText>
    </LogoContainer>
}