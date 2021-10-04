import "./contact.scss"
import {Instagram, LinkedIn, GitHub, KeyboardArrowUp, FormatQuoteTwoTone} from "@material-ui/icons";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {

    const [message, setMessage] = useState(false)

    // const handleSubmit = (e) => {
    //      e.preventDefault();

    // }

    function sendEmail(e) {
        e.preventDefault();

        setMessage(true)
        setTimeout(() => {setMessage(false);}, 2000);
        
        emailjs.sendForm('gmail', 'edwinngwong', e.target, 'user_iS0TrRAZ0bSxNek1e4VjU')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <div className="contact" id="contact">
            <div className="top">
                <h2>Contact me</h2>
                <form className = "contact-form"onSubmit = {sendEmail}>
                    <div>
                        <input type="text" placeholder = "Name" name = "name"/>
                    </div>
                    <div>
                        <input type="email" placeholder="Email" name = "email"/>
                    </div>
                    <div>
                        <input type="text" placeholder = "Subject" name = "subject"/>
                    </div>
                    <div>
                        <textarea placeholder = "Message.." cols="30" rows="10" name = "message"></textarea>
                    </div>
                    <div>
                        <button type = "submit" id = "button">Send</button>
                    </div>
                    {message && <span>Thanks for your message, I will reply as soon as possible :)</span>}
                </form>
            </div>
            <div className="bottom">
                <a href="#intro"><KeyboardArrowUp className="arrow"></KeyboardArrowUp></a>
                <div className="itemContainer">
                    <a href="https://www.linkedin.com/in/edwinngwong/" target="_blank"><LinkedIn className="item"></LinkedIn></a>
                    <a href="https://github.com/Edwinngwong" target="_blank"><GitHub className="item"></GitHub></a>
                    <a href="https://www.instagram.com/edwin_ngw/" target="_blank"><Instagram className="item"></Instagram></a>
                </div>
                <p>© Edwin Ng Wong | All rights reserved</p>
            </div>
        </div>
    )
}
