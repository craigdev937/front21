import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = "https://restcountries.com/v3.1";

class FetchAPI {
    fetchAllCountries = createAsyncThunk(
    "countries/fetchAllCountries", 
        async () => {
        const res: Response = await fetch(`${URL}/all`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return [...data];
    });

    getAllByContinent = createAsyncThunk(
    "countries/getAllByContinent", 
        async (continent: string) => {
        const res: Response = await fetch(`${
            URL}/region/${continent}`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return [...data];
    });

    fetchAllByName = createAsyncThunk(
    "countries/fetchAllByName", 
        async (name: string) => {
        const res: Response = 
        await fetch(`${URL}/name/${name}`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return [...data];
    });
};

export const API: FetchAPI = new FetchAPI();


