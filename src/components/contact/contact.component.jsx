import "./contact.styles.scss";
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";


const Contact = () => {
    const floatingNav = document.getElementById("floatingNav");

    const hideNavBar = () => {
        floatingNav.style.bottom = "-5rem";
    }
    const showNavBar = () => {
        floatingNav.style.bottom = "2rem";
    }
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact-container">
                <div className="contact-options">
                    <article className="contact-option">
                        <MdOutlineEmail className="contact-icon" />
                        <h4>Email</h4>
                        <h5>mazanlabeeb@gmail.com</h5>
                        <a href="mailto:mazanlabeeb@gmail.com" target="_blank">Send a Message</a>
                    </article>

                    <article className="contact-option">

                        <RiMessengerLine className="contact-icon" />
                        <h4>Messenger</h4>
                        <h5>mazanlabeeb</h5>
                        <a href="https://m.me/mazanlabeeb" target="_blank">Send a Message</a>
                    </article>

                    <article className="contact-option">

                        <BsWhatsapp className="contact-icon" />
                        <h4>Whatsapp</h4>
                        <h5>+923061695230</h5>
                        <a href="https://api.whatsapp.com/send?phone=923061695230" target="_blank">Send a Message</a>
                    </article>
                </div>
                <form action="" autoComplete="off">
                    <input type="text" name="name" onFocus={hideNavBar} onBlur={showNavBar} id="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" onFocus={hideNavBar} onBlur={showNavBar} id="email" placeholder="Your Email" required />
                    <textarea placeholder="Leave a message..." onFocus={hideNavBar} onBlur={showNavBar} name="message" id="message" rows="7" required></textarea>
                    <button type="submit" className="btn btn-primary">Send a Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;