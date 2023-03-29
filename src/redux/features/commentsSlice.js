import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllComments } from "../../services/guestServices";


const initialState = {
    comments: [],
    status: 'idle',
    error: null,
};

export const fetchComments = createAsyncThunk('comments/fetchComments', getAllComments);

export const commentsSlice = createSlice({
    name:'comments',
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder
        .addCase(fetchComments.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchComments.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.comments = Object.values(action.payload);
        })
        .addCase(fetchComments.rejected, (state, action) => {
            state.status = 'faild';
            state.error = action.error.message;
        })
    }
});

export const getCommentsStatus = (state) => state.comments.status;


export const getCommentsForCurrentTruck = (state,truckId) => state.comments.comments.filter(comment => comment.truckId ===truckId);



export default commentsSlice.reducer;