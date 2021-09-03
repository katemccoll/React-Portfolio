import React from "react";

import "./assets/css/Resume.css";
import ResumeDoc from "./assets/Web_Developer_Resume_Kate_McColl.pdf";
import KiwiGrad from "./assets/images/kiwi-grad.png";

function Resume() {

    return (
        <>
            <div className="resume-nav" />
            <div className="resume-container">
                    <div className="card-resume-container">
                            <h1 className="resume-title">Looking for a front end developer?</h1>
                            <h3>Some of the technologies I have used</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                                <li>React</li>
                                <li>JWT</li>
                                <li>GraphQL</li>
                            </ul>
                            <button className="btn btn-blue" type="button">
                                <a className="resume-btn-text" href={ResumeDoc} download="Web_Developer_Resume_Kate_McColl" target="_blank" rel="noreferrer">Download my resume</a>
                            </button>
                    </div>

                    <div className="kiwi-grad-container">
                        <img className="kiwi-grad" src={KiwiGrad} alt="kiwi in grad hat"/>
                    </div>
            </div>
        </>

    );
}

export default Resume;