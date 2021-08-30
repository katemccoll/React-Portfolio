import React, { useState } from "react";

import "./styles/ProjectBanner.css";
import LaptopIllustration from "./pages/assets/images/laptop-illustration.png";

const ProjectBanner = () => {

    const [scroll, setScroll] = useState(false);

    const hideIcon = () => {
        if (window.scrollY >= 200) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    window.addEventListener('scroll', hideIcon);

    return (
        <div className="banner-container">
            <h1 className="banner-title">Projects</h1>
            <p className="banner-text">Take a look through the projects that I have been working on recently</p>
            <img
                className="laptop-illustration"
                src={LaptopIllustration}
                alt="girl on laptop"
            />
            <div className={scroll ? "scroll-down-icon active" : "scroll-down-icon"}>
                <i className="fas fa-chevron-down"></i>
            </div>

        </div>
    )
};

export default ProjectBanner;