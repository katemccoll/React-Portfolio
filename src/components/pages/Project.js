import React from "react";
import "./assets/css/Project.css";
import TechReady from "./assets/images/portfolio/techReady.jpg";
import SuperHero from "./assets/images/portfolio/marvel_superhero_locator.JPG";
import TechBlog from "./assets/images/portfolio/techBlog.JPG";
import WeatherDashboard from "./assets/images/portfolio/weather_dashboard.JPG";
import NoteTaker from "./assets/images/portfolio/note-taker.JPG";
import WorkDay from "./assets/images/portfolio/work_day.JPG";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Projects() {
    return (
        <div>
            <section className="margin2">
                <article className="main-project">
                    <img className="large_image" src={TechReady}
                         alt="Tech Ready" />
                        <div className="text-block">
                            <p className="featured">Featured Project</p>
                            <h3 className="featured-title">Tech READY</h3>
                            <p className="featured-description">This application allows Junior developers to seek
                                answers to hard interview questions,
                                connect with tutors and obtain reference material to assist prior to taking interviews.
                                The main objective is to help provide the individual prior to having an interview with a
                                prospective employee and to 'nail' that interview.
                            </p>
                            <ul>
                                <li>Group Project</li>
                                <li>Node</li>
                                <li>JWT</li>
                            </ul>
                            <div>
                                <a href="https://gentle-headland-96957.herokuapp.com/"
                                   target="_blank" rel="noreferrer" className="icon-link"><FontAwesomeIcon icon={["fas", "link"]} /></a>
                                <a href="https://github.com/katemccoll/Project-2-TechREADY"
                                   target="_blank" rel="noreferrer" className="icon-github"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                            </div>
                        </div>

                </article>

                <article className="main-project">
                    <img className="large_image" src={SuperHero}
                         alt="Marvel Superhero Locator" />
                        <div className="text-block">
                            <p className="featured">Featured Project</p>
                            <h3 className="featured-title">Marvel SuperHero Locator</h3>
                            <p className="featured-description">A website made for Marvel fans, by Marvel fans. You can
                                search for
                                your
                                favourite heroes and receive their image, information, comics and youtube videos.
                            </p>
                            <ul>
                                <li>Group Project</li>
                                <li>jQuery</li>
                                <li>Local Storage</li>
                            </ul>
                            <div className="icon">
                                <a href="https://katemccoll.github.io/TeamProject-Marvel-Superhero-Locator"
                                   target="_blank" rel="noreferrer" className="icon-link"><FontAwesomeIcon icon={["fas", "link"]} /></a>
                                <a href="https://github.com/katemccoll/TeamProject-Marvel-Superhero-Locator"
                                   target="_blank" rel="noreferrer" className="icon-github"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                            </div>
                        </div>

                </article>
                <section className="row">
                    <article className="small-project">
                        <div>
                            <img className="small_image" alt="Tech Blog"
                                 src={TechBlog} target="_blank" />
                                <div className="text-block">
                                    <h3 className="featured-title">Tech Blog</h3>
                                    <p> A CMS-style blog site similar to a Wordpress site,
                                        where developers can publish their blog posts and comment on other
                                        developers’ posts as well.
                                    </p>
                                    <ul>
                                        <li>Node</li>
                                        <li>Handlebars</li>
                                        <li>Sequelize</li>
                                    </ul>
                                    <div className="icon">
                                        <a href="https://hidden-retreat-02954.herokuapp.com/dashboard"
                                           target="_blank" rel="noreferrer" className="icon-link">
                                            <FontAwesomeIcon icon={["fas", "link"]} />
                                        </a>
                                        <a href="https://github.com/katemccoll/Tech-Blog" target="_blank" rel="noreferrer" className="icon-github">
                                            <FontAwesomeIcon icon={['fab', 'github']} />
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </article>
                    <article className="small-project">
                        <div>
                            <img alt="Note Taker" src={NoteTaker}
                                 className="small_image" />
                                <div className="text-block">
                                    <h3 className="featured-title">Note Taker</h3>
                                    <p>Note-taker is an application that can be used to write, save and delete
                                        notes.</p>
                                    <ul>
                                        <li>Node</li>
                                        <li>Bootstrap</li>
                                        <li>Local Storage</li>
                                    </ul>
                                    <div>
                                        <a href="https://secret-oasis-60851.herokuapp.com/"
                                           target="_blank" rel="noreferrer" className="icon-link">
                                            <FontAwesomeIcon icon={["fas", "link"]} />
                                        </a>
                                        <a href="https://github.com/katemccoll/Note-Taker" target="_blank" rel="noreferrer" className="icon-github">
                                            <FontAwesomeIcon icon={['fab', 'github']} /></a>
                                    </div>
                                </div>
                        </div>
                    </article>
                </section>

                <section className="row">
                    <article className="small-project">
                        <div>
                            <img className="small_image" alt="Weather Dashboard"
                                 src={WeatherDashboard} />
                                <div className="text-block">
                                    <h3 className="featured-title">Weather Dashboard</h3>
                                    <p>Using Open Weather Map API to build a weather dashboard to search any city's
                                        current
                                        weather and forecast for the next five days.</p>
                                    <ul>
                                        <li>jQuery</li>
                                        <li>API</li>
                                        <li>Local Storage</li>
                                    </ul>
                                    <div className="icon">
                                        <a href="https://katemccoll.github.io/Weather_Dashboard/" target="_blank" rel="noreferrer" className="icon-link">
                                        <FontAwesomeIcon icon={["fas", "link"]} /></a>
                                        <a href="https://github.com/katemccoll/Weather_Dashboard" target="_blank" rel="noreferrer" className="icon-github">
                                            <FontAwesomeIcon icon={['fab', 'github']} />
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </article>
                    <article className="small-project">
                        <div>
                            <img alt="Day Planner" src={WorkDay} className="small_image" />
                                <div className="text-block">
                                    <h3 className="featured-title">Day Planner</h3>
                                    <p>A single web page day planner to keep track of event on for the day.</p>
                                    <ul>
                                        <li>jQuery</li>
                                        <li>Bootstrap</li>
                                        <li>Local Storage</li>
                                    </ul>
                                    <div className="icon">
                                        <a href="https://katemccoll.github.io/Work_Day_Scheduler/Develop/index.html"
                                           target="_blank" rel="noreferrer" className="icon-link"><FontAwesomeIcon icon={["fas", "link"]} /></a>
                                        <a href="https://github.com/katemccoll/Work_Day_Scheduler" target="_blank" rel="noreferrer" className="icon-github">
                                            <FontAwesomeIcon icon={['fab', 'github']} />
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </article>
                </section>
            </section>
        </div>
    );
}

export default Projects;