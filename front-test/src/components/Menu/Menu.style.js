import styled from 'styled-components';

export const MenuContainer = styled.ul`
    width: 60%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
`;

export const MenuItem = styled.li`
    color: #63718E;
    cursor: pointer;
    font-size: 15px;
    line-height: 22.5px;
    font-family: 'Open Sans', sans-serif;
    :nth-of-type(2) {
        display: flex;
        align-items: center;
    }
    :nth-of-type(2) span {
        display: inline-block;
        font-weight: 700;
        margin-left: 7px;
    }
`;

export const MenuDwnBtn = styled.button`
    background-color: #C774EE;
    cursor: pointer;
    border-radius: 10px;
    color: #fff;
    padding: 10px 18.5px;
    border: none;
    outline: none;
    :hover {
        box-shadow: 0px 5px 10px rgba(76, 174, 80, .3);
    }
`;

export const MenuSgupBtn = styled.button`
    background-color: transparent;
    cursor: pointer;
    border-radius: 10px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: #63718E;
    padding: 10px 18.5px;
    border: 2px solid #63718E;
    outline: none;
    :hover {
        color: #C774EE;
        border: 2px solid #C774EE;
    }
`;