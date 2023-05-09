import React from "react";
import { Header } from "../components/header/Header";
import { InputForm } from "../components/inputForm/inputForm";
import { Info } from "../components/info/Info";

export const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <InputForm />
            <Info />
        </React.Fragment>
    );
};


