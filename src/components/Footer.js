import React from "react";
import "./styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Footer() {
    return (
        <div>
            <ul className="footer">
                <li>
                    <a className="footer-icon" href="https://github.com/katemccoll" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} /></a>
                </li>
                <li>
                    <a className="footer-icon" href="https://www.linkedin.com/in/kate-mccoll-a59389205/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                </li>
                <li>
                    <a className="footer-icon" href="https://twitter.com/kittykat6065059" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                </li>

            </ul>
        </div>
    );
}

export default Footer;
