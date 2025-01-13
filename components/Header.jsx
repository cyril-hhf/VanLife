import React from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import imageUrl from "/assets/images/avatar-icon.png"
import HamburgerMenu from "./HamburgerMenu"

export default function Header() {
    const isLoggedIn = localStorage.getItem("loggedin")
    const navigate = useNavigate()
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function handleLogout() {
        localStorage.removeItem("loggedin")
        navigate("/login", { replace: true })
    }

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav className="desktop-nav">
                <NavLink
                    to="/host"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img
                        src={imageUrl}
                        className="login-icon"
                    />
                </Link>
                {isLoggedIn && (
                    <button onClick={handleLogout} className="logout-button">
                        Log Out
                    </button>
                )}
            </nav>
            <HamburgerMenu />
        </header>
    )
}