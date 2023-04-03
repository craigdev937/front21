import React from "react";
import "./inputForm.css";
import { FcSearch } from "react-icons/fc";
import { useAppSelector, useAppDispatch } from "../../global/Hooks";
import { API } from "../../global/FetchAPI";

export const InputForm = () => {
    const [name, setName] = React.useState("");
    const dispatch = useAppDispatch();
    const darkmode = useAppSelector((state) => state.darkmode.darkmode);

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSubmit = 
    (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(API.fetchAllByName(name));
        setName("");
    };

    return (
        <React.Fragment>
            <section className="input">
                <form onSubmit={handleSubmit}>
                    <FcSearch />
                    <input 
                        className="input__item"
                        placeholder="Search for a Country..."
                        onChange={handleChange}
                    />
                </form>
            </section>
        </React.Fragment>
    );
};

