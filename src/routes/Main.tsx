import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Home } from "../pages/Home";
import { Country } from "../pages/Country";

const ReactRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        path: "/country/:id",
        element: <Country />,
        errorElement: <NotFound />
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={ReactRouter} />
        </React.Fragment>
    );
};


