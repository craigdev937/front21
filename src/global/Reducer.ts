import { configureStore } from "@reduxjs/toolkit";
import { DarkReducer } from "./DarkSlice";
import { CountryReducer } from "./CountrySlice";

export const Reducer = configureStore({
    reducer: {
        darkmode: DarkReducer,
        countries: CountryReducer
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;



