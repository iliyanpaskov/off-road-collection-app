import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/features/userSlice";
import trucksReducer from "../redux/features/trucksSlice";
import commentsReducer from "./features/commentsSlice";
import likesReducer from "./features/likesSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

const reducer = combineReducers({
    user: userReducer,
    trucks: trucksReducer,
    comments: commentsReducer,
    likes: likesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer
});