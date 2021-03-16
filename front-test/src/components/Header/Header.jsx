import React from 'react';
import {TopHeader, HeaderWrapper} from './Header.style';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

function Header() {
    return (
        <TopHeader>
            <HeaderWrapper>
                <Logo />
                <Menu />
                </HeaderWrapper>
        </TopHeader>
    )
}

export default Header;