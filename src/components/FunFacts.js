import React from "react";

import KiwiReading from "../components/pages/assets/images/kiwi-reading.png";
import KiwiArt from "../components/pages/assets/images/kiwi-art.png";
import KiwiDance from "../components/pages/assets/images/kiwi-dancing.png";

import "./styles/FunFacts.css";
import "./styles/Button.css";

const FunFacts = () => {

    return (
        <div className="facts-container">
            <div className="single-fact-container">
                <div className="fact-text-container">
                    <h2>Just a little bit about me...</h2>
                    <p>
                        Best known for always having a smile on my face and a bubbly personality to match.
                        I always try to find the fun in what I do and
                        I believe that is when I produce my best work.

                    </p>
                    <p>
                        In my spare time, you will can find me in a sunny spot reading a book or
                        in front of the TV building LEGO.
                    </p>
                </div>

                <img src={KiwiReading} alt="Kiwi Reading" className="kiwi-homepage"/>
            </div>
            <div className="single-fact-container row-reverse">
                <div className="fact-text-container">
                    <h2>My passion in life...</h2>
                    <p>
                        Art was my first my passion in life. I was drawn to art from a young age because it let me explore things I couldn't articulate.
                        I love to experiment with my art and love perfecting the fine detail everything from portraits, to abstract, and now... Programming!
                    </p>
                    <p>
                        While training to become a Web Developer, I realised it was the perfect medium to combine both my logical side, and my artistic side.
                        As such, all of the images you see on my website were drawn by me!
                    </p>
                </div>

                <img src={KiwiArt} alt="Kiwi Reading" className="kiwi-homepage"/>
            </div>
            <div className="single-fact-container">
                <div className="fact-text-container">
                    <h2>
                        Want to work together?
                    </h2>
                    <p>I have completed my coding bootcamp through Monash University, and I'm really excited to continue
                        developing my skills.</p>
                            <p>I love making websites, I love creating digital art, and I'm ready to get started.

                        </p>
                    <button className="btn btn-slide btn-purple">
                        <a href="/contact" type="button" >Contact Me</a>
                    </button>
                </div>
                <img src={KiwiDance} alt="Kiwi Reading" className="kiwi-homepage"/>
            </div>
        </div>
    )
}

export default FunFacts;