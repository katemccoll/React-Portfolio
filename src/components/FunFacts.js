import React from "react";
import KiwiReading from "../components/pages/assets/images/kiwi-reading.png";
import KiwiArt from "../components/pages/assets/images/kiwi-art.png";
import KiwiDance from "../components/pages/assets/images/kiwi-dancing.png";

import "./styles/FunFacts.css";

const FunFacts = () => {

    return (
        <div className="facts-container">
            <div className="single-fact-container">
                <div className="fact-text-container">
                    <h2>Just a little bit about me...</h2>
                    <p>
                        Best known for always having a smile on my face and a bubbly personality to match.
                        I always try to find the fun in what in what I do as
                        I believe that is when I produce my best work.

                    </p>
                    <p>
                        In my spare time, you will can find me in a sunny spot reading a book or
                        in front of the tv building lego.
                    </p>
                </div>

                <img src={KiwiReading} alt="Kiwi Reading" className="kiwi-homepage"/>
            </div>
            <div className="single-fact-container row-reverse">
                <div className="fact-text-container">
                    <h2>My passion in life...</h2>
                    <p>
                        Art is my passion! I have been drawn to art from a young age, always interested in emotion and
                        fine detail that painting can bring. I love to experiment with my art and my subject matters, from
                        people to abstract art.
                    </p>
                    <p>
                        My latest experiment is digital art! I am enjoying all of the many brushes and
                        the ease of erasing mistakes. I am currently learning about illustrations and all the different
                        opportunities there.
                    </p>
                </div>

                <img src={KiwiArt} alt="Kiwi Reading" className="kiwi-homepage"/>
            </div>
            <div className="single-fact-container">
                <div className="fact-text-container">
                    <h2>
                        Want to work together?
                    </h2>
                    <p>Even though I am fresh out of my web developer training and newbie with digital art,
                    what I do have is a creative mind and eagerness to learn.</p>
                    <div className="email-button">
                        <a href="/contact">Contact Me</a>
                    </div>
                </div>
                <img src={KiwiDance} alt="Kiwi Reading" className="kiwi-homepage"/>
            </div>
        </div>
    )
}

export default FunFacts;