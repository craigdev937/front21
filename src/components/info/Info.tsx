import React from "react";
import "./Info.css";
import { Link } from "react-router-dom";
import { CountryAPI } from "../../global/CountryAPI";

export const Info = () => {
    const { error, isLoading, data } = CountryAPI.useAllQuery();
    if (error) {
        if ("status" in error) {
            const errMsg = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMsg}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    return (
        <section className="info">
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                data!.map((country, index) => (
                    <Link
                        className="info__card"
                        key={index}
                        to={`/${country.cioc}`}
                    >
                        <img
                            className="info__image"
                            alt={country.flags.alt}
                            src={country.flags.png}
                        />
                        <aside className="info__content">
                            <h3>{country.name.common}</h3>
                            <p>
                                Population: <span>{country.population}</span>
                            </p>
                            <p>
                                Region: <span>{country.region}</span>
                            </p>
                            <p>
                                Capital: <span>{country.capital}</span>
                            </p>
                        </aside>
                    </Link>
                ))
            )}
        </section>
    );
};


