import React from "react";
import '../styles/Menu.scss';

const Desktop = () => {
    return(
        <div className="desktop-menu">
            <ul>
                <li>
                    <a href="/" className="title">My orders</a>
                </li>

                <li>
                    <a href="/">My account</a>
                </li>

                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>
    )
}

export default Desktop;