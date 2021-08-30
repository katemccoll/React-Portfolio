import React from "react";

import "./styles/HeroSection.css";
import KatePortrait from "./pages/assets/images/Kate_McColl_medium.png";

const HeroSection = () => {

    return (
        <>
        <section className="heroContainer">
            <div className="heroText">
                <h1>Kia Ora & Welcome!</h1>
                <p>I am Kate and I am a web developer</p>

            </div>
            <img className="heroImage" src={KatePortrait} alt="Kate portrait"/>

        </section>
        </>
    )
};

export default HeroSection;