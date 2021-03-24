import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'burger',
    initialState: {
        burgerIcon: false,
        mobileMenu: false
    },
    reducers: {
        toggleMenu: state => {
            state.burgerIcon = !state.burgerIcon;
            state.mobileMenu = !state.mobileMenu;
        }
    },
});

export const { toggleMenu } = slice.actions;
export const selectBurgerIcon = state => state.burger.burgerIcon;
export const selectScreen = state => state.burger.mobileMenu;
export default slice.reducer;
