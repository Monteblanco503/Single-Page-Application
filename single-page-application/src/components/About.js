import React, { useState } from "react";

const About = () => {
    const [message, setMessage] = useState('Welcome to the About Page!');

    const changeMessage = () => {
        setMessage('This is some Dynamic Content!');
    };

    return (
        <div>
            <h2>About Us</h2>
            <p>{message}</p>
            <button onClick={changeMessage}>Change Content</button>
        </div>
    );
};

export default About;