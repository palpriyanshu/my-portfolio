import React from "react";
import "./Contact.scss"
import {Link, VStack} from "@chakra-ui/react";

const Contact = () => {
    return <section className="contact" id="contact">
        <VStack padding={10} align="flex-start" className="text-section">
        <h2>Get In Touch</h2>
        <p>
            I’m always excited to connect with fellow developers, potential collaborators, and anyone interested in my work. My inbox is always open if there is any new opportunity available for me. I look forward to hearing from you!
        </p>
        <Link className="email-link" href="mailto:chandelpriyanshuofficial@gmail.com" target="_blank" rel="noreferrer">Say Hello!</Link>
        </VStack>
    </section>
}

export default Contact