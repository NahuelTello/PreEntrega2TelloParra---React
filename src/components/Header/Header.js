import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import imagen from "../../assets/img/ricky.png";

const Header = () => {
    return (
        <div className="Header">
            <Link to="/">
                <img src={imagen} alt="RickyMorty-logo" width={100} />
            </Link>
        </div>
    );
};

export default Header;
