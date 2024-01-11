import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    products: [],
    cartTotal: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct:(state, action) => {
            state.products.push(action.payload);
            state.cartTotal += action.payload.price;
        },
    },
    
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;