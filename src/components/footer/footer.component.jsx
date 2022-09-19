import "./footer.styles.scss";
import {FiInstagram} from "react-icons/fi";
import {FaFacebookF} from "react-icons/fa";
import {IoLogoTwitter} from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer-logo">Mazan</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className="footer-socials">
                <a href="https://facebook.com/mazanlabeeb"><FaFacebookF /></a>
                <a href="https://instagram.com/mazanlabeeb"><FiInstagram /></a>
                <a href="https://twitter.com/mazanlabeeb"><IoLogoTwitter /></a>
            </div>
        </footer>
    )
}

export default Footer;