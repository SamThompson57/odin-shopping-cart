import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav>
            <h3>Logo</h3>
            <ul className="links">
                <Link to={"/"}>
                    <li>Home</li>
                </Link>
                <Link to={'/shop'}>
                    <li>Shop</li>
                </Link>
                
            </ul>
        </nav>
    )
}

export default Nav