import React from "react";

import ProjectBanner from "../ProjectBanner";
import FeaturedProject from "../FeaturedProject";
import ProjectCards from "../ProjectCards";


import ExcitedGirl from "../pages/assets/images/excited.png";
import "./assets/css/Project.css";

function Projects() {
    return (
    <>
        <div className="project-nav" />
        <ProjectBanner />
        <FeaturedProject />
        <ProjectCards />
        <div className="more-container">
            <h1>Want to see more of my work?</h1>
            <p>Check out all of my projects on my github</p>
            <button className="btn btn-white">
                <a
                    href="https://github.com/katemccoll?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                >MORE PROJECTS
                </a>
            </button>

            <img className="excited-girl" src={ExcitedGirl} alt="girl excited"/>
        </div>
    </>
    );
}

export default Projects;