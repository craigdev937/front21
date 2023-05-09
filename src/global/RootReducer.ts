import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { DarkReducer } from "./DarkSlice";
import { FilterReducer } from "./FilterSlice";
import { CountryAPI } from "./CountryAPI";

export const Reducer = configureStore({
    reducer: {
        darkmode: DarkReducer,
        filter: FilterReducer,
        [CountryAPI.reducerPath]: CountryAPI.reducer
    },       // gDM = getDefaultMiddleware.
    middleware: (gDM) => gDM().concat(CountryAPI.middleware),
});

setupListeners(Reducer.dispatch);
export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;



