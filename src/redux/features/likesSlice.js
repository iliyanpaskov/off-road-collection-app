import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const likesUrl = `${process.env.REACT_APP_CLASS_LIKES_URL}`;

const headers = {
    "X-Parse-Application-Id": `${process.env.REACT_APP_APPLICATION_ID}`,
    "X-Parse-REST-API-Key": `${process.env.REACT_APP_API_KEY}`,
    "X-Parse-Revocable-Session": `${process.env.REACT_APP_SESSION}`,
    "Content-Type": "application/json",
}

const initialState = {
    likes: [],
    status: 'idle',
    error: null,
};

export const fetchLikes = createAsyncThunk('likes/fetchLikes', async () => {
    try {
        const res = await fetch(likesUrl, {
            method: "GET",
            headers,
        });
        const data = await res.json();
        return data;
    } catch (error) {
        //TODO errors 
    }
});

export const fetchAddLikes = createAsyncThunk('likes/fetchAddLikes', async (values) => {
    try {
        const res = await fetch(likesUrl, {
            method: "POST",
            headers,
            body: JSON.stringify(values),
        });
        const data = await res.json();
        return [data, values];
    } catch (error) {
        //TODO errors 
    }
});

export const fetchDeleteLike = createAsyncThunk('fetch/fetchDeleteLike', async (likeId) => {
    try {
        const res = await fetch(`${likesUrl}/${likeId}`, {
            method: "DELETE",
            headers,
        })
        const data = await res.json();
        return [data, likeId];
    } catch (error) {
        //TODO errors 
    }
});


export const likesSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchLikes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLikes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.likes = Object.values(action.payload)[0];
            })
            .addCase(fetchLikes.rejected, (state, action) => {
                state.status = 'faild';
                state.error = action.error.message;
            })
            .addCase(fetchAddLikes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAddLikes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const [data, values] = action.payload;
                const like = {
                    objectId: data.objectId,
                    truckId: values.truckId,
                    userId: values.userId,
                }
                state.likes.push(like);
            })
            .addCase(fetchAddLikes.rejected, (state, action) => {
                state.status = 'faild';
                state.error = action.error.message;
            })
            .addCase(fetchDeleteLike.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDeleteLike.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const [data, likeId] = action.payload;
                const restLikes = state.likes.filter(like => like.objectId !== likeId)
                state.likes = restLikes;
            })
            .addCase(fetchDeleteLike.rejected, (state, action) => {
                state.status = 'faild';
                state.error = action.error.message;
            })
    }
})

export const getTruckLikes = (state, truckId, userId) => state.likes.likes
    .filter(like => like.truckId === truckId)
    .filter(like => like.userId === userId);

export const getAllLikes = (state) => state.likes.likes
export const getAllUserLikes = (state, userId) => state.likes.likes.filter(like => like.userId === userId);

export default likesSlice.reducer;