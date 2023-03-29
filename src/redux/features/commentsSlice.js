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
        commentAddded:{
            reducer(state,action){
                state.comments.push(action.payload)
            }
        }
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

export const {commentAddded} =commentsSlice.actions;

export default commentsSlice.reducer;