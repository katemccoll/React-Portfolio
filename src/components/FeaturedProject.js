import React from "react";
import "./styles/FeaturedProject.css";

import TechReady from "./pages/assets/images/portfolio/techReady.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SuperHero from "./pages/assets/images/portfolio/marvel_superhero_locator.JPG";



const FeaturedProject = () => {

    return (
        <>
            <section className="featured-container TR">
                <img className="large-image" src={TechReady}
                     alt="Tech Ready" />
                <div className="text-block">
                    <p className="featured">Featured Project</p>
                    <h2 className="featured-title">Tech READY</h2>
                    <p className="featured-description">This application allows Junior developers to seek
                        answers to hard interview questions,
                        connect with tutors and obtain reference material to assist prior to taking interviews.
                    </p>
                    <ul className="tech-list">
                        <li>Group Project</li>
                        <li>Node</li>
                        <li>JWT</li>
                    </ul>
                    <div className="project-icon">
                        <a href="https://gentle-headland-96957.herokuapp.com/"
                           target="_blank" rel="noreferrer" className="icon-link"><FontAwesomeIcon icon={["fas", "link"]} /></a>
                        <a href="https://github.com/katemccoll/Project-2-TechREADY"
                           target="_blank" rel="noreferrer" className="icon-github"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                    </div>
                </div>
            </section>
            <section className="featured-container MSL">
                <img className="large-image" src={SuperHero}
                     alt="Marvel Superhero Locator" />
                <div className="text-block">
                    <p className="featured">Featured Project</p>
                    <h2 className="featured-title">Marvel SuperHero Locator</h2>
                    <p className="featured-description">A website made for Marvel fans, by Marvel fans. You can
                        search for
                        your
                        favourite heroes and receive their image, information, comics and youtube videos.
                    </p>
                    <ul className="tech-list">
                        <li>Group Project</li>
                        <li>jQuery</li>
                        <li>Local Storage</li>
                    </ul>
                    <div className="project-icon">
                        <a href="https://katemccoll.github.io/TeamProject-Marvel-Superhero-Locator"
                           target="_blank" rel="noreferrer" className="icon-link"><FontAwesomeIcon icon={["fas", "link"]} /></a>
                        <a href="https://github.com/katemccoll/TeamProject-Marvel-Superhero-Locator"
                           target="_blank" rel="noreferrer" className="icon-github"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                    </div>
                </div>
            </section>
        </>


    )
};

export default FeaturedProject;