import React from 'react';
import starIcon from "../assets/images/icon-star.svg";

function Header() {
    return (
        <div className="title">
            <img src={starIcon} alt="Star" />
            <h1>FAQs</h1>
        </div>
    );
}

export default Header;