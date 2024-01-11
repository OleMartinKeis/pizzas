import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';



export const storeTwo = configureStore({
    reducer: {},
    cart: cartReducer
  });


