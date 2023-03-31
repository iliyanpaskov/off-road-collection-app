import {configureStore} from "@reduxjs/toolkit";
import trucksReducer from "../redux/features/trucksSlice";
import commentsReducer from "./features/commentsSlice";
import likesReducer from "./features/likesSlice";

export const store = configureStore ({
    reducer:{
        trucks: trucksReducer,
        comments: commentsReducer,
        likes: likesReducer,
    }
 })