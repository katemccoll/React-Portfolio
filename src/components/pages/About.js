import React from "react";
import "./assets/css/About.css";
import ProfilePicture from "./assets/images/Kate-McColl-Profile.jpg"

const About = () => {
    return (

        <div id="about-container">
            <img id="profile-picture" src={ProfilePicture} alt="profile of Kate" />
            <article id="about-me">
                <h4>Front End Developer / Artist</h4>
                <h1>MORE ABOUT KATE</h1>
                <p>
                    Hello! I am Kate and I am born and raised in Dunedin, New Zealand. After completing my Fine Arts
                    degree at
                    the University of Canterbury in 2016, I moved to Melbourne. While there, I worked at an Australian art and gift shop.
                    While I enjoyed the personal aspect of my job, it drained a lot of my artistic ambition, so when I came
                    home I often want to get away from art.
               </p>
                <p>
                    A career as a web developer would be great because I'd be able to focus on solving interesting
                    problems
                    during the day, while still having the energy and desire to create my art outside of work.
                    I have now moved back to New Zealand, but the great thing about web development is that you can work anywhere in the world!

                </p>

                <p>
                    Along with being creative, I am bubbly and known to always have a big smile on my face. I am
                    dedicated
                    and
                    love looking at all the fine details, especially when it comes to puzzles and drawing realistic
                    portraits.
                    I love getting fully invested in something that I'm passionate about, and I find it incredibly
                    rewarding
                    when the hard work pays off.

                </p>
                <p>
                    I have graduated from Monash University Coding Bootcamp, which was a very intense, fast paced but enjoyable course. I loved
                    learning to think about websites in a different way. I really enjoyed creating websites
                    from
                    scratch and love looking for the small details to make the page better.
                    I love that I can bring my creative side to the work and use my knowledge to build a
                    site, just
                    like a jigsaw puzzle.

                </p>
            </article>
        </div>

    )
}

export default About;