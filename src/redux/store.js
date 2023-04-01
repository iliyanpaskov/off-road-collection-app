import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../redux/features/userSlice";
import trucksReducer from "../redux/features/trucksSlice";
import commentsReducer from "./features/commentsSlice";
import likesReducer from "./features/likesSlice";

export const store = configureStore ({
    reducer:{
        user:userReducer,
        trucks: trucksReducer,
        comments: commentsReducer,
        likes: likesReducer,
    }
 })