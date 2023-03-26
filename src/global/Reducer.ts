import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer } from "./ThemeSlice";

export const Reducer = configureStore({
    reducer: {
        theme: ThemeReducer,
        countries: () => "Countries REST API!"
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;



