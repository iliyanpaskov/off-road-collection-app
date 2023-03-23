import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    objectId: null,
    username: null,
    sessionToken: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser(state,action) {
            state
        }
    }
});


export default userSlice.reducer;
