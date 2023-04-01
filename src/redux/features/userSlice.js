import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorNotification, successNotification } from "../../services/notificationServices";

const singUpUrl = `${process.env.REACT_APP_SIGN_UP_URL}`;

const initialState = {
    user: {
        objectId: null,
        username: null,
        email: null,
        sessionToken: null,
        isAuthenticated: false,
    },
    status: 'idle',
    error: null,
};

const headers = {
    "X-Parse-Application-Id": `${process.env.REACT_APP_APPLICATION_ID}`,
    "X-Parse-REST-API-Key": `${process.env.REACT_APP_API_KEY}`,
    "X-Parse-Revocable-Session": `${process.env.REACT_APP_SESSION}`,
    "Content-Type": "application/json",
};

export const fetchLogin = createAsyncThunk('user/lohinFetch', async (url) => {
    try {
        const res = await fetch(url, {
            method: "GET",
            headers,
        });
        const data = await res.json();
        if (!data.error) {
            successNotification('Welcome !');
            return data;
        } else {
            throw data.error;
        }
    } catch (error) {
        errorNotification(error);
    }
});

export const fetchSignUp = createAsyncThunk('user/fetchSignUp', async (values) => {
    try {
        const res = await fetch(singUpUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify(values)
        });
        const data = await res.json();
        if (!data.error) {
            successNotification('Welcome !');
            return data;
        } else {
            throw data.error;
        }
    } catch (error) {
        errorNotification(error);
    }
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogout: {
            reducer(state) {
                state.user = initialState;
                state.status = 'idle';
            }
        },
        setSignUpUsername: {
            reducer(state, action) {
                state.user.username = action.payload;
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = {
                    objectId: action.payload.objectId,
                    username: action.payload.username,
                    email: action.payload.email,
                    sessionToken: action.payload.sessionToken,
                    isAuthenticated: true,
                };
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchSignUp.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSignUp.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const saveUsername = state.user.username;
                state.user = {
                    objectId: action.payload.objectId,
                    username: saveUsername,
                    email: action.payload.email,
                    sessionToken: action.payload.sessionToken,
                    isAuthenticated: true,
                };
            })
            .addCase(fetchSignUp.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const getUser = (state) => state.user.user;

export const { userLogout, setSignUpUsername } = userSlice.actions;

export default userSlice.reducer;