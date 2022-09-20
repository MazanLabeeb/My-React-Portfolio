import "./footer.styles.scss";
import {FiInstagram} from "react-icons/fi";
import {FaFacebookF} from "react-icons/fa";
import {IoLogoTwitter} from "react-icons/io";

const Footer = () => {
    return (
        <footer>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer-socials">
                <a href="https://facebook.com/mazanlabeeb"><FaFacebookF /></a>
                <a href="https://instagram.com/mazanlabeeb"><FiInstagram /></a>
                <a href="https://twitter.com/mazanlabeeb"><IoLogoTwitter /></a>
            </div>

            <div className="footer-copyright">
                <small>&copy; MazanLabeeb.tech All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer;