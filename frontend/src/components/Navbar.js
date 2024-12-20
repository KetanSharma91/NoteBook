import React, { useEffect, useState } from 'react';
import { useUser } from '../context/userdata/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';

const Navbar = ({ triggerPopup, query, setQuery }) => {
    const { user } = useUser();

    let history = useNavigate();
    const [storedUser, setStoredUser] = useState(null);

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("user"));
        if (localUser) {
            setStoredUser(localUser);
        } else if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            setStoredUser(user);
        }
    }, [user]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem('token');
        history('/');
        triggerPopup("You have successfully logged out!");
        window.location.reload();
    };

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };

    return <>
        <header className="header">
            {/* <div className="menu float-left" style={{ right: "0" }}><span></span></div> */}

            <Link to="/home" className="logo filter-i">
            <img src={logo} alt="logo" style={{ width: "80px" }} />
            </Link>

            <form className="search-big-btn noted-n" action="" style={{ margin: "10px -10px", width: "64%",     background: "rgba(241, 243, 244, .7)" }}>
                <button type="submit" className="search-button">
                    <i className="i">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor"
                            className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </i>
                </button>
                <input type="text" id='search-input' placeholder="Search.." name="search" value={query} onChange={handleSearch} />
            </form>

            <div id="user-details" style={{ cursor: "pointer" }} className="user-details">
                {storedUser?.email ? storedUser.email.charAt(0).toUpperCase() : "U"}
                <span className="user-info">
                    <p>
                        {storedUser?.name ||
                            (storedUser?.email.split("@")[0].charAt(0).toUpperCase() +
                                storedUser?.email.split("@")[0].slice(1)) ||
                            "User"}
                    </p>
                    <br />
                    <p>{storedUser?.email || "Email"}</p> <br />
                    <Link onClick={handleLogout}>
                        Logout
                    </Link>
                </span>
            </div>


            <nav>

                <form className="search-big-btn noted-b" action="">
                    <button type="submit" className="search-button" onClick={handleSearchSubmit}>
                        <i className="i">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor"
                                className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </i>
                    </button>
                    <input type="text" id="search-input" placeholder="Search.." name="search" value={query} onChange={handleSearch} />
                </form>

            </nav>
        </header>
    </>;
}

export default Navbar;