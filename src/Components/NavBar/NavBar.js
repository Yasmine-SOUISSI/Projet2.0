import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/actions/user";
import "./NavBar.css";
function NavBar() {
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const dispatch = useDispatch();
    return (
        <nav className="navbar">
            {isAuth ? (
                <div className="nav">
                    <div className="logo">
                        BW<span>digital</span>
                    </div>
                    <ul className="menu">
                        <li>
                            <a>
                                <Link to="/Admin">Profil </Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/contactList">Contact List </Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/addProduct">Add Product</Link>
                            </a>
                        </li>

                        <li>
                            <a>
                                <Link to="/" onClick={() => dispatch(logout())}>
                                    Logout
                                </Link>
                            </a>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="nav">
                    <div className="logo">
                        BW<span>digital</span>
                    </div>
                    <ul className="menu">
                        <Link to="./Home">
                            {" "}
                            <li>
                                <a>Home</a>
                            </li>
                        </Link>

                        <li>
                            <a href="#Service">Services</a>
                        </li>
                        <li>
                            <a href="#work">Gallery</a>
                        </li>
                        <li>
                            <a href="#work">Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
