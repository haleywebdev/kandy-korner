import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

// link's one job is to generate anchor tags.
// to attribute is the href attribute of the anchor tag.
// NavBar is a presentation component.

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            
            <li className="navbar__item active">
                <Link className="navbar__link" to="/Locations">Locations</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/Products">Products</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/Customers">Customers</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/Employees">We're Hiring!</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="#"
                onClick={
                    () => { 
                        localStorage.removeItem("kandy_customer")
                    }
                }>
                    Logout
                    </Link>
            </li>

        </ul>
    )
}

// when you change the URL with JS, the browser broadcasts and event that the URL was changed.
// now implement another component to listen for that event and display the appropriate component. 
// this is done in ApplicationViews.js