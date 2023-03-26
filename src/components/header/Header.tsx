import React from "react";
import "./Header.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../../global/Hooks";
import { toggleDarkMode } from "../../global/DarkSlice";

export const Header = () => {
    const dispatch = useAppDispatch();
    const darkmode = useAppSelector((state) => state.darkmode.darkmode);
    return (
        <React.Fragment>
            <header className="header">
                <h1 className="header__title">Where in the World?</h1>
                <button 
                    className="header__button"
                    onClick={() => dispatch(toggleDarkMode())}
                    > {darkmode ? <BsFillSunFill /> : <BsFillMoonFill />}
                </button>
            </header>
        </React.Fragment>
    );
};

