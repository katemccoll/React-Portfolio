import React from "react";
import "./styles/HeroSection.css";
import KatePortrait from "./pages/assets/images/Kate_McColl_medium.png";

const HeroSection = () => {

    return (
        <>
        <section className="heroContainer">
            <div className="heroText">
                <h1>Hello & Welcome!</h1>
                <h3>I am a Web Developer from Dunedin, New Zealand</h3>
            </div>
            <img className="heroImage" src={KatePortrait} alt="Kate portrait"/>

        </section>
        </>
    )
};

export default HeroSection;