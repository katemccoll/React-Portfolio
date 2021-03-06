import React from "react";
import "./assets/css/Home.css";
import HeroSection from "../HeroSection";
import FunFacts from "../FunFacts";

const Home = () => {
    return (
        <>
            <div className="home-nav" />
            <HeroSection />
            <FunFacts />
        </>
    );
}

export default Home;