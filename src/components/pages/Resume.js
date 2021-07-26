import React from "react";
import "./assets/css/Resume.css";
import ResumeDoc from "./assets/Web_Developer_Resume_Kate_McColl.pdf";

function Resume() {

    return (
        <div id="background-resume">
            <h2>Looking for a front end developer?</h2>
            <div id="container">
                <div id="card-resume">
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
                        <a id="resume-btn" href={ResumeDoc} download="Web_Developer_Resume_Kate_McColl" target="_blank">Download my resume</a>
                    </button>
                </div>
                <div id="card-resume">
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

        </div>
    );
}

export default Resume;