import React from "react";
import "./Maincontentheading.css";

const Maincontentheading = () => {

    return (
        <>
            <div className="main-head-container">
                <div className="padding-left20">
                    <p>Your listing <span>Hotel Govendor</span> has been approved!</p>
                </div>
                <div className="padding-right20">
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </>
    )
}

export { Maincontentheading }