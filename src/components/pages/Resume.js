import React from "react";
import "./assets/css/Resume.css";
import ResumeDoc from "./assets/Web_Developer_Resume_Kate_McColl.pdf";

function Resume() {

    return (
        <div id="background-resume">
            <h2>Looking for a front end developer?</h2>
            <div id="container">
                <div id="card-resume">
                    <p>I have just completed Monash University Coding Bootcamp. Intense 24 weeks of learning full stack
                        web development. Check out my resume to learn more about me!</p>
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