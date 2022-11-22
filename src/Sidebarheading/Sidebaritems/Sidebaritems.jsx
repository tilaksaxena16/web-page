import React from "react";
import "./Sidebaritems.css";

const Sidebaritems = (user) => {

    return (
        <>
            <div className="items-container">
                <div className="item-icon">
                    <i className="fa-solid fa-gear"></i>
                </div>
                <div>
                    <label>{user.name}</label>
                </div>
            </div>
        </>
    )
}

export { Sidebaritems }