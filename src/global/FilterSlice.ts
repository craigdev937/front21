import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter } from "../models/Interfaces";

const initialState: IFilter = {
    filters: {
        search: "",
        region: ""
    }
};

const FilterSlice = createSlice({
    name: "countries",
    initialState: initialState,
    reducers: {
        searchCountry: (
            state, 
            action: PayloadAction<IFilter>
        ) => {
            state.filters.search = 
                action.payload.filters.search
        },
        filterRegion: (
            state, 
            action: PayloadAction<IFilter>
        ) => {
            state.filters.region = 
                action.payload.filters.region
        },
    },
});

export const FilterActions = FilterSlice.actions;
export const FilterReducer = FilterSlice.reducer;


