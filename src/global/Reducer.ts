import { configureStore } from "@reduxjs/toolkit";

export const Reducer = configureStore({
    reducer: {
        theme: () => "Light/Dark Theme",
        countries: () => "Countries REST API!"
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;



