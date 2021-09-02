import React from "react";

import "./assets/css/Resume.css";
import ResumeDoc from "./assets/Web_Developer_Resume_Kate_McColl.pdf";
import KiwiGrad from "./assets/images/kiwi-grad.png";

function Resume() {

    return (
        <>
            <div className="resume-nav" />
            <div className="resume-container">
                <h2 className="resume-title">Looking for a front end developer?</h2>
                <div className="info-resume-container">
                    <div className="card-resume-container">
                        <div className="card-resume">
                            <p>Some of the skills I have gained from Monash University Coding Bootcamp</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>Node.js</li>
                                <li>React</li>
                            </ul>
                            <button type="button">
                                <a className="resume-btn" href={ResumeDoc} download="Web_Developer_Resume_Kate_McColl" target="_blank" rel="noreferrer">Download my resume</a>
                            </button>
                        </div>
                        <div className="card-resume">
                            <p>Somethings you may not know about me</p>
                            <ul>
                                <li>I have a Fine Arts Degree</li>
                                <li>Lego Builder</li>
                                <li>A wannabe Sudoku Master</li>
                                <li>Baker</li>
                                <li>Passion for creating stunning websites</li>
                            </ul>
                        </div>
                    </div>
                    <div className="kiwi-grad-container">
                        <img className="kiwi-grad" src={KiwiGrad} alt="kiwi in grad hat"/>
                    </div>
                </div>

            </div>
        </>

    );
}

export default Resume;