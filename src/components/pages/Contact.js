import React from 'react';
import "./assets/css/Contact.css";
import KiwiMail from "../pages/assets/images/kiwi-mail.png"

const Contact = () => {

    return (
        <>
            <div className="contact-nav" />
            <div className="contact-container">
                <h1>Contact Me</h1>
                <p>If you have any questions or want to work together on a project, then please get in touch!</p>
                <div className="email-button">
                    <a href="mailto:contact@katemccollart.com">contact@katemccollart.com</a>
                </div>
                <img className="kiwi-mail" src={KiwiMail} alt="Kiwi holding mail"/>
            </div>
        </>

    )

}

export default Contact;