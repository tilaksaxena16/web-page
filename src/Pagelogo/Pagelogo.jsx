import React from "react";
import './Pagelogo.css';

const Pagelogo = () => {

    return (
        <>
            <div className="logo-container">
                <div className="logo-div">
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="page-name">
                    <h1>Listeo</h1>
                </div>
            </div>
        </>
    )
}

export { Pagelogo }