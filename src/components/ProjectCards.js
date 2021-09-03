import React from "react";
import "./styles/ProjectCards.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const ProjectCards = () => {
    return (
        <div className="project-card-container">

            <div className="TB project-image">
                <h3 className="project-title">
                    Tech Blog
                </h3>
                <ul className="tech-list">
                    <li>Node</li>
                    <li>Handlebars</li>
                    <li>Sequelize</li>
                </ul>
                <div className="project-icon">
                    <a href="https://hidden-retreat-02954.herokuapp.com/dashboard"
                       target="_blank" rel="noreferrer" className="icon-link">
                        <FontAwesomeIcon icon={["fas", "link"]} />
                    </a>
                    <a href="https://github.com/katemccoll/Tech-Blog" target="_blank" rel="noreferrer" className="icon-github">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </div>
            </div>

            <div className="project-image NT">
                <h3 className="project-title">Note Taker</h3>
                <ul className="tech-list">
                    <li>Node</li>
                    <li>Bootstrap</li>
                    <li>Local Storage</li>
                </ul>
                <div className="project-icon">
                    <a href="https://secret-oasis-60851.herokuapp.com/"
                       target="_blank" rel="noreferrer" className="icon-link">
                        <FontAwesomeIcon icon={["fas", "link"]} />
                    </a>
                    <a href="https://github.com/katemccoll/Note-Taker" target="_blank" rel="noreferrer" className="icon-github">
                        <FontAwesomeIcon icon={['fab', 'github']} /></a>
                </div>
            </div>

            <div className="project-image WD">
                <h3 className="project-title">Weather Dashboard</h3>
                <ul className="tech-list">
                    <li>jQuery</li>
                    <li>API</li>
                    <li>Local Storage</li>
                </ul>
                <div className="project-icon">
                    <a href="https://katemccoll.github.io/Weather_Dashboard/" target="_blank" rel="noreferrer" className="icon-link">
                        <FontAwesomeIcon icon={["fas", "link"]} /></a>
                    <a href="https://github.com/katemccoll/Weather_Dashboard" target="_blank" rel="noreferrer" className="icon-github">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </div>
            </div>

            <div className="project-image DP">
                <h3 className="project-title">Day Planner</h3>
                <ul className="tech-list">
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>Local Storage</li>
                </ul>
                <div className="project-icon">
                    <a href="https://katemccoll.github.io/Work_Day_Scheduler/Develop/index.html"
                       target="_blank" rel="noreferrer" className="icon-link"><FontAwesomeIcon icon={["fas", "link"]} /></a>
                    <a href="https://github.com/katemccoll/Work_Day_Scheduler" target="_blank" rel="noreferrer" className="icon-github">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </div>
            </div>

        </div>
    )
};

export default ProjectCards;