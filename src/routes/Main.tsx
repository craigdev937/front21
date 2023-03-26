import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { useAppSelector } from "../global/Hooks";
import { Header } from "../components/header/Header";
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
    const darkmode = useAppSelector(
        (state) => state.darkmode.darkmode);
    return (
        <aside 
            className={`theme ${darkmode && "darkmode"}`}
        >
            <React.Fragment>
                <Header />
                <RouterProvider router={ReactRouter} />
            </React.Fragment>
        </aside>
    );
};


