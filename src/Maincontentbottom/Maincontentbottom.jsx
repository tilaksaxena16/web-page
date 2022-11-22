import React from "react";
import "./Maincontentbottom.css";

const Maincontentbottom = (user) => {

    return (
        <>
            <div className="main-bottom-container-left">
                <div className="main-bottom-div">
                    <h6 className="font">{user.name}</h6>
                </div>
                <div className="main-bottom-div">
                    <i className="fa-solid fa-layer-group icon"></i>
                    <p>Your listing <span className="col-black">Hotel Govendor</span> has been approved!</p>
                </div>
                <div className="main-bottom-div">
                    <i className="fa-regular fa-star icon"></i>
                    <p>Kathy Brown left a review <span>5.0</span> on <span className="col-black">Burger house</span></p>
                </div>
            </div>
        </>
    )
}

export { Maincontentbottom }

