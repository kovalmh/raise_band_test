import React, {useState} from 'react';
import burger from '../../assets/icons/burger.svg';
import burgerActive from '../../assets/icons/burger-active.svg';
import {Image} from './Burger.style';

export default function Burger() {
    const [clicked, setClicked] = useState(false);
    const toggleMenu = () => {
        setClicked(!clicked);
    }

    return (
        <Image src={clicked ? burgerActive : burger} onClick={toggleMenu} />
    )
}