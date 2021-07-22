import React from 'react';

export default function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            <ul className="content">
                <li><a href="tel:+61490808496">Click to Call</a></li>
                <li>
                    <a href="mailto:kate@katemccollart.com">Email Me</a>
                </li>
                <li>
                    <a href="https://github.com/katemccoll" target="_blank" rel="noreferrer">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kate-mccoll-a59389205/" target="_blank" rel="noreferrer">LinkedIn</a>
                </li>

            </ul>
        </div>
    );
}