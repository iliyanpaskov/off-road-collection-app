import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTrucks } from "../../services/guestServices";

const initialState = {
    trucks: [],
    status: 'idle',
    error: null,
};

export const fetchTrucks = createAsyncThunk('trucks/fetchTrucks', getAllTrucks);

export const trucksSlice = createSlice({
    name: 'trucks',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchTrucks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTrucks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.trucks = Object.values(action.payload);
            })
            .addCase(fetchTrucks.rejected, (state, action) => {
                state.status = 'faild';
                state.error = action.error.message;
            })
    }

});

export const selectAllTrucks = (state) => state.trucks.trucks;
export const getTrucksStatus = (state) => state.trucks.status;
export const getTrucksError = (state) => state.trucks.error;

export const selectById = (state, truckId) => state.trucks.trucks.find(truck => truck.objectId === truckId);

export const { addTruckLikes } = trucksSlice.actions;

export default trucksSlice.reducer;

