import React from "react";

import ProjectBanner from "../ProjectBanner";
import FeaturedProject from "../FeaturedProject";
import ProjectCards from "../ProjectCards";

function Projects() {
    return (
    <div>
        <ProjectBanner />
        <FeaturedProject />
        <ProjectCards />
    </div>
    );
}

export default Projects;