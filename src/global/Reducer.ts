import { configureStore } from "@reduxjs/toolkit";
import { DarkReducer } from "./DarkSlice";

export const Reducer = configureStore({
    reducer: {
        darkmode: DarkReducer,
        countries: () => "Countries REST API!"
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;



