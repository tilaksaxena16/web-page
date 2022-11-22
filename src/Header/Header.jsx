import React from "react";
import "./Header.css"

const Header = () => {

    return (
        <>
            <div className="header-container">
                <div className="header-div">
                    <div className="padding-right20 padding-left20">
                        <label>Home</label>
                        <i className="fa-solid fa-chevron-down font-size-downarrow"></i>
                    </div>
                    <div className="padding-right20">
                        <label>Listings</label>
                        <i className="fa-solid fa-chevron-down font-size-downarrow"></i>
                    </div>
                    <div className="padding-right20 col-red">
                        <label>User Panel</label>
                        <i className="fa-solid fa-chevron-down font-size-downarrow"></i>
                    </div>
                    <div className="padding-right20">
                        <label>Pages</label>
                        <i className="fa-solid fa-chevron-down font-size-downarrow"></i>
                    </div>
                </div>
                <div className="header-div">
                    <div className="padding-right20 padding-top4">
                        <i className="fa-solid fa-user-tie header-icon-size"></i>
                        <label>My Account</label>
                        <i className="fa-solid fa-chevron-down font-size-downarrow"></i>
                    </div>
                    <div className="padding-right20 header-child-div">
                        <label>Add Listing</label>
                        <i className="fa-solid fa-circle-plus"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Header }