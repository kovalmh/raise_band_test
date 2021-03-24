import React from 'react';
import burger from '../../assets/icons/burger.svg';
import burgerActive from '../../assets/icons/burger-active.svg';
import { Image } from './Burger.style';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, selectBurgerIcon } from './burgerSlice';

export default function Burger() {
    const mobileMenu = useSelector(selectBurgerIcon);
    const dispatch = useDispatch();

    return (
        <Image src={mobileMenu ? burgerActive : burger}
               onClick={() => dispatch(toggleMenu())} />
    )
}