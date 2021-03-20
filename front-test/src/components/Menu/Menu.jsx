import React from 'react';
import {MenuContainer, MenuItem, MenuDwnBtn, MenuSgupBtn} from './Menu.style';
import Burger from '../Burger/Burger';
import Search from '../../assets/icons/search.svg';
import MobileVibration from '../../assets/icons/mobile-vibration.svg';

export default function Menu() {

    return (
        <>
        <MenuContainer>
            <MenuItem><img src={Search} /></MenuItem>
            <MenuItem><img src={MobileVibration} /><span>Call us</span></MenuItem>
            <MenuItem children="About" />
            <MenuItem children="Product" />
            <MenuItem children="FAQ" />
            <MenuItem children="Contact" />
            <MenuDwnBtn children="Download" />
            <MenuSgupBtn children="Sign up" />
        </MenuContainer>
        <Burger />
        </>
    )
}