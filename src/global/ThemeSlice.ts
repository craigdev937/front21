import { createSlice } from "@reduxjs/toolkit";
import { ITheme } from "../models/Interfaces";

const initialState: ITheme = {
    theme: false
};

const ThemeSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
        toggle: (state) => {
            state.theme = !state.theme;
        },
    }
});

export const { toggle } = ThemeSlice.actions;
export const ThemeReducer = ThemeSlice.reducer;


