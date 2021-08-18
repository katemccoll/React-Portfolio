import React from "react";
import './styles/NavTabs.css'

function NavTabs({currentPage, handlePageChange}) {
    return (
        <div className="nav-tab">
            <h1 id="logo">K</h1>
            <nav>
                <ul>
                    <li>
                        <a
                            href="#home"
                            onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#project"
                            onClick={() => handlePageChange('Project')}
                            className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavTabs;

