import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountry, ICountryState } from "../models/Interfaces";
import { API } from "./FetchAPI";

const initialState: ICountryState = {
    countries: [],
    loading: false,
    error: null
};

const CountrySlice = createSlice({
    name: "countries",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.fetchAllCountries.rejected.toString(), 
        (state, action: PayloadAction<ICountryState>) => {
            state.loading = false,
            state.error = action.payload.error
        });
        builder.addCase(API.fetchAllCountries.pending, 
        (state) => {
            state.error = null,
            state.loading = true
        });
        builder.addCase(API.fetchAllCountries.fulfilled.type, 
        (state, action: PayloadAction<ICountry[]>) => {
            state.loading = false,
            state.countries = [...action.payload]
        });
    }
});

export const CountryReducer = CountrySlice.reducer;


