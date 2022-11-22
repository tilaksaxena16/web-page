import React from "react";
import "./Nav.css";

const Nav = () => {

    return (
        <>
            <div className="nav-container">
                <div className="nav-font">
                    <label>Howdy, Tom!</label>
                </div>
                <div>
                    <label>Home</label>
                    <i className="fa-solid fa-chevron-right font-size-downarrow padding-right5"></i>
                    <label>Dashboard</label>
                </div>
            </div>
        </>
    )
}

export { Nav }