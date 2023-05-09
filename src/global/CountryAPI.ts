import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICountry } from "../models/Interfaces";
const URL = "https://restcountries.com/v3.1";

export const CountryAPI = createApi({
    reducerPath: "CountryAPI",
    tagTypes: ["Country"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        all: builder.query<ICountry[], void>({
            query: () => `${URL}/all`,
            providesTags: (result) => result ?
            [...result.map(({ name }) =>
                ({ type: "Country" as const, name })),
                { type: "Country", name: "LIST" },
            ] : [{ type: "Country", name: "LIST" }]
        }),
        code: builder.query<ICountry, string>({
            query: (code: string) => `${URL}/alpha/${code}`,
            providesTags: ["Country"]
        }),
        region: builder.query<ICountry, string>({
            query: (region: string) => `${URL}/region/${region}`,
            providesTags: ["Country"]
        })
    }),
});



