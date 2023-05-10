import React from "react";
import "./inputForm.css";
import { FcSearch } from "react-icons/fc";
import { useAppSelector, useAppDispatch } from "../../global/Hooks";

export const InputForm = () => {
    const [name, setName] = React.useState("");
    const dispatch = useAppDispatch();
    const darkmode = useAppSelector((state) => state.darkmode.darkmode);

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    // const handleSubmit = 
    // (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
        
    //     setName("");
    // };

    return (
        <React.Fragment>
            <section className="input">
                <form action="">
                    <input 
                        type="text" 
                        placeholder="Search for a Country"
                    />
                </form>
            </section>
        </React.Fragment>
    );
};

