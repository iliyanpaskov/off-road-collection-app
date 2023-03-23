import {configureStore} from "@reduxjs/toolkit";
import trucksReducer from "../redux/features/trucksSlice";

export const store = configureStore ({
    reducer:{
        trucks: trucksReducer,
    }
})