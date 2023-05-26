import React from "react";
import { Link, useParams } from "react-router-dom";
import { CountryAPI } from "../global/CountryAPI";

export const Country = () => {
    const { code } = useParams();
    const codeID = code !== undefined ? String(code) : "";
    const { error, isLoading, data: country } = 
        CountryAPI.useCodeQuery(codeID);

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };
    
    if (isLoading) return <h1>Loading...</h1>

    return (
        <React.Fragment>
            <section className="country__detail">
                <Link to="/">Home</Link>
                <aside className="country-detail-content">
                    { country !== undefined ? (
                        <img 
                            src={country.flags.png} 
                            alt={country.flags.alt} 
                        />
                    ) : null}
                </aside>
            </section>
        </React.Fragment>
    );
};


