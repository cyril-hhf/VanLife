import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import imageUrl from "/assets/images/avatar-icon.png";

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("loggedin");

    function handleLogout() {
        localStorage.removeItem("loggedin");
        navigate("/login", { replace: true });
    }

    return (
        <div className="hamburger-menu">
            <button className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
                &#9776;
            </button>
            {isOpen && (
                <div className="hamburger-dropdown">
                    <NavLink to="/host" onClick={() => setIsOpen(false)}>Host</NavLink>
                    <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
                    <NavLink to="/vans" onClick={() => setIsOpen(false)}>Vans</NavLink>
                    <Link to="/login" className="login-link" onClick={() => setIsOpen(false)}>
                        <img src={imageUrl} className="login-icon" alt="Login" />
                    </Link>
                    {isLoggedIn && (
                        <button onClick={() => { handleLogout(); setIsOpen(false); }} className="logout-button">
                            Log Out
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}