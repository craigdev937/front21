import { createSlice } from "@reduxjs/toolkit";
import { IDark } from "../models/Interfaces";

const initialState: IDark = {
    darkmode: false
};

const DarkSlice = createSlice({
    name: "darkmode",
    initialState: initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkmode = !state.darkmode;
        },
    }
});

export const { toggleDarkMode } = DarkSlice.actions;
export const DarkReducer = DarkSlice.reducer;


