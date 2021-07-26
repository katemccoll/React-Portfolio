import React, {useState } from 'react';
import "./assets/css/Contact.css";
import { validateEmail} from "./utils/helpers";


export default function Contact() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "userName") {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        if (!userName || !message) {
            setErrorMessage("Cant not leave this blank");
            return;
        }
        setMessage("");
        setEmail("");
        setUserName("");
    }

    return (
        <div id="background">
            <div id="text">
                <h2>Hello, interested to get in contact with me?</h2>
            </div>
            <div id="card">
                <form className="form" onSubmit={handleFormSubmit}>
                    <label htmlFor="userName">Name:</label>
                    <input
                        value={userName}
                        name="userName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Your name.."
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Your email.."
                    />
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" onChange={handleInputChange} placeholder="Write something.." cols="40" rows="4">

                    </textarea>
                    <button type="button" onClick={handleFormSubmit}>Submit</button>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
}