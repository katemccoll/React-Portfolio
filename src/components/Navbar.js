import React, { useState } from "react";
import './styles/Navbar.css'



const Navbar = () => {

    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);


    const hideNav = () => {
        if (window.scrollY >= 300) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    window.addEventListener('scroll', hideNav);

    return (
        <nav className="navbar">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu} />
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
                <ul className={click ? 'navbar-menu active' : "navbar-menu"}>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={scroll ? "nav-link active" : "nav-link"}
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className={scroll ? "nav-link active" : "nav-link"} onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className={scroll ? "nav-link active" : "nav-link"} onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume" className={scroll ? "nav-link active" : "nav-link"} onClick={closeMobileMenu}>
                            Resume
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={scroll ? "nav-link active" : "nav-link"} onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>

        </nav>
    );
}

export default Navbar;

