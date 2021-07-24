import React from 'react';
import { useForm } from "react-hook-form";
import "./assets/css/Contact.css";

export default function Contact() {

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div>
                <h2>Contact</h2>
            </div>
            <div>
                <form className="form" onSubmit={handleFormSubmit}>
                    <label htmlFor="Name">Name:</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Your name.."
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"

                        type="email"
                        placeholder="Your email.."
                    />
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" placeholder="Write something.." cols="40" rows="4">

                    </textarea>
                    <button type="button" onClick={handleFormSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
}