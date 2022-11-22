import React from "react";
import "./Maincontentcenter.css";

const Maincontentcenter = (user) => {

    return (
        <>
            <div className="main-center-container">
                <div>
                    <h1>{user.number}</h1>
                    <p>{user.name}</p>
                </div>
                <div>
                    <i className="fa-solid fa-map-location-dot main-center-icon"></i>
                </div>
            </div>
        </>
    )
}

export { Maincontentcenter }