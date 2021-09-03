import React from "react";

import "./styles/ProjectBanner.css";
import LaptopIllustration from "./pages/assets/images/laptop-illustration.png";

const ProjectBanner = () => {


    return (
        <div className="banner-container">
            <h1 className="banner-title">Projects</h1>
            <p className="banner-text">Take a look through the projects that I have been working on recently</p>
            <img
                className="laptop-illustration"
                src={LaptopIllustration}
                alt="girl on laptop"
            />
        </div>
    )
};

export default ProjectBanner;