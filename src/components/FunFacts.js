import React from "react";
import KiwiReading from "../components/pages/assets/images/kiwi-reading.png";
import KiwiArt from "../components/pages/assets/images/kiwi-art.png"

import "./styles/FunFacts.css";

const FunFacts = () => {

    return (
        <div className="facts-container">
            <div className="single-fact-container row-reverse">
                <div className="fact-text-container">
                    <h2>Just a little bit about me...</h2>
                    <p>
                        Best known for always having a smile on my face and a bubbly personality to match.
                        I always try to find the fun in what in what I do as I believe that is when I produce my best work.
                        I love to learn!
                    </p>
                </div>

                <img src={KiwiReading} alt="Kiwi Reading" className="kiwi-homepage"/>
            </div>
            <div className="single-fact-container">
                <div className="fact-text-container">
                    <h2>Artist</h2>
                    <p>
                        I have been drawn to art from a young age, always interested in emotion and
                        fine detail that painting can bring. I love experiment with my art and my subject matters, from
                        people to abstract art.
                    </p>
                    <p>
                        Though I still paint and draw, I am now experimenting with digital art.
                    </p>
                </div>

                <img src={KiwiArt} alt="Kiwi Reading" className="kiwi-homepage"/>
            </div>
            <div className="single-fact-container">

                <h2>
                    Want to work together?
                </h2>
                <p> </p>

            </div>
        </div>
    )
}

export default FunFacts;