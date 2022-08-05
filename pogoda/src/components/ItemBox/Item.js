import React from "react";
import Logo from "../../assets/logo.png";
import "./Item.css";

const Item = () => {
    return(
        <div className="container">
            <div className="card">
                <img src={Logo} className="card-img-top" alt="city logo" />
            </div>
        </div>
    );
};

export default Item;