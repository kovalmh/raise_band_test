import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from '../components/Burger/burgerSlice';

export const store = configureStore({
    reducer: {
        burger: burgerReducer
    },
});