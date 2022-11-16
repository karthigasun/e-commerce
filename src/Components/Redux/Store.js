import { configureStore } from "@reduxjs/toolkit";
import cartReducers from './Slice'

const store=configureStore({
    reducer:{
        cart:cartReducers
    }
});

export default store