import React, {useEffect, useState} from "react";
import './styles/Navbar.css'
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom/cjs/react-router-dom";


const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const ScrollToTop = () => {
        const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    }

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
                            className="nav-link"
                            onClick={closeMobileMenu}
                        ><ScrollToTop />
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/projects"
                            className="nav-link"
                            onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/about"
                            className="nav-link"
                            onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/resume"
                            className="nav-link"
                            onClick={closeMobileMenu}>
                            Resume
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact"
                              className="nav-link"
                              onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>

        </nav>
    );
}

export default Navbar;

