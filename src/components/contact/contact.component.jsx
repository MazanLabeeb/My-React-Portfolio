import "./contact.styles.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from 'framer-motion';
import { viewPortOnce } from "../../config";


const Contact = () => {

    const hideNavBar = () => {
        document.getElementById("floatingNav").style.bottom = "-8rem";
    }
    const showNavBar = () => {
        document.getElementById("floatingNav").style.bottom = "2rem";
    }
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact-container">
                <div className="contact-options">

                    <motion.a
                        initial={{
                            opacity: 0,
                            transform: 'translateX(50px)'
                        }}
                        whileInView={{
                            opacity: 1,
                            transform: 'translateX(0px)'
                        }}
                        viewport={{ once: viewPortOnce }}
                        transition={{ delay: 0.4 }}
                        href="mailto:mazanlabeeb@gmail.com" target="_blank">
                        <article className="contact-option">
                            <MdOutlineEmail className="contact-icon " />
                            <h4>Email</h4>
                            <h5>mazanlabeeb@gmail.com</h5>
                            <p> Send a Message</p>
                        </article>
                    </motion.a>
                    <motion.a
                        initial={{
                            opacity: 0,
                            transform: 'translateX(50px)'
                        }}
                        whileInView={{
                            opacity: 1,
                            transform: 'translateX(0px)'
                        }}
                        viewport={{ once: viewPortOnce }}
                        transition={{ delay: 1.0 }}
                        href="https://m.me/mazanlabeeb" target="_blank">
                        <article className="contact-option">
                            <RiMessengerLine className="contact-icon" />
                            <h4>Messenger</h4>
                            <h5>mazanlabeeb</h5>
                            <p>
                                Send a Message
                            </p>
                        </article>
                    </motion.a>
                    <motion.a
                        initial={{
                            opacity: 0,
                            transform: 'translateX(50px)'
                        }}
                        whileInView={{
                            opacity: 1,
                            transform: 'translateX(0px)'
                        }}
                        viewport={{ once: viewPortOnce }}
                        transition={{ delay: 1.5 }}
                        href="https://api.whatsapp.com/send?phone=923061695230" target="_blank">

                        <article className="contact-option">
                            <BsWhatsapp className="contact-icon" />
                            <h4>Whatsapp</h4>
                            <h5>+923061695230</h5>
                            <p> Send a Message</p>
                        </article>
                    </motion.a>
                </div>
                <form action="https://formsubmit.co/1a6397aef63bcdc9afe758f5d96e1b6a" method="POST" autoComplete="off">
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
