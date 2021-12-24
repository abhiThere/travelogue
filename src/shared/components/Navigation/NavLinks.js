import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>All Users</NavLink>
        </li>
        <li>
            <NavLink to="/places/gallery">Places Gallery</NavLink>
        </li>
        <li>
            <NavLink to="/places/wishlist">Wish List</NavLink>
        </li>
        <li>
            <NavLink to="/places/new">Add Place</NavLink>
        </li>
    </ul>
}

export default NavLinks;