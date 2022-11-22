import React from "react";
import "./Sidebarheading.css";

const Sidebarheading = (user) => {

    return (
        <>
            <div className="heading-container">
                <label className="padding-left27">{user.name}</label>
            </div>
        </>
    )
}

export { Sidebarheading }