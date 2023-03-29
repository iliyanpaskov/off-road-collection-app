import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllComments } from "../../services/guestServices";
const commentsUrl = `${process.env.REACT_APP_CLASS_COMMENTS_URL}`;


const initialState = {
    comments: [],
    status: 'idle',
    error: null,
};

export const fetchComments = createAsyncThunk('comments/fetchComments', getAllComments);
export const fetchDeleteComment = createAsyncThunk('comments/fetchDeleteComment',async (initialComment)=>{
    try {
        const res = await fetch (`${commentsUrl}/${initialComment}`,{
            method:"DELETE",
            headers:{
                "X-Parse-Application-Id": `${process.env.REACT_APP_APPLICATION_ID}`,
                "X-Parse-REST-API-Key": `${process.env.REACT_APP_API_KEY}`,
                "X-Parse-Revocable-Session": `${process.env.REACT_APP_SESSION}`,
                "Content-Type": "application/json",
            }
        });
        const data = await res.json();
        return [data,initialComment];
    } catch (error) {
        // TODO errors
    }
})

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        commentAddded: {
            reducer(state, action) {
                state.comments.push(action.payload)
            }
        },
        commentRemoved: {
            reducer(state, action) {
                const restComments = state.comments.filter(comment => comment.initialComment !== action.payload);
                state.comments = restComments;
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.comments = Object.values(action.payload);
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchDeleteComment.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDeleteComment.fulfilled, (state, action) => {
                state.status = 'succeeded';
               const [data,initialComment] = action.payload;
                const restComments = state.comments.filter(comment => comment.objectId !== initialComment);
                restComments.forEach(x=>console.log(x.objectId));
                console.log(initialComment);
                state.comments = restComments;
            })
            .addCase(fetchDeleteComment.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const getCommentsStatus = (state) => state.comments.status;


export const getCommentsForCurrentTruck = (state, truckId) => state.comments.comments.filter(comment => comment.truckId === truckId);

export const { commentAddded,commentRemoved } = commentsSlice.actions;

export default commentsSlice.reducer;