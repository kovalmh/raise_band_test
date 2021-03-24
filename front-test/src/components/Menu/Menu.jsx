import React from 'react';
import { MenuContainer, MenuItem, MenuDwnBtn, MenuSgupBtn } from './Menu.style';
import Burger from '../Burger/Burger';
import Search from '../../assets/icons/search.svg';
import MobileVibration from '../../assets/icons/mobile-vibration.svg';
import { useSelector } from "react-redux";
import { selectScreen } from '../../components/Burger/burgerSlice';

export default function Menu() {
    const menu = useSelector(selectScreen);

    return (
        <>
            {menu && <MenuContainer>
                <MenuItem><img src={Search} alt='search-icon'/></MenuItem>
                <MenuItem><img src={MobileVibration} alt='vibrocall' /><span>Call us</span></MenuItem>
                <MenuItem children="About"/>
                <MenuItem children="Product"/>
                <MenuItem children="FAQ"/>
                <MenuItem children="Contact"/>
                <MenuDwnBtn children="Download"/>
                <MenuSgupBtn children="Sign up"/>
            </MenuContainer>}
                <Burger />
        </>
    )
}