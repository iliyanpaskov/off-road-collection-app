import {configureStore} from "@reduxjs/toolkit";
import trucksReducer from "../redux/features/trucksSlice";
import commentsReducer from "./features/commentsSlice";

export const store = configureStore ({
    reducer:{
        trucks: trucksReducer,
        comments: commentsReducer,
    }
})