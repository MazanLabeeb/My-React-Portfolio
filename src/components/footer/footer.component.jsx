import "./footer.styles.scss";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { SiUpwork } from "react-icons/si";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <footer>

            {(currentPath === "/") ?
                <ul className="permalinks">
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#experience">Experience</a></li>
                    <li><a href="/#services">Services</a></li>
                    <li><a href="/#portfolio">Portfolio</a></li>
                    <li><a href="/#testimonials">Testimonials</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
                :
                ""

            }



            <div className="footer-socials ">
                <a href="https://www.upwork.com/freelancers/~01622576d387633e89" target="blank"><SiUpwork /></a>
                <a href="https://www.linkedin.com/in/mazanlabeeb/" target="blank"><ImLinkedin2 /></a>
                <a href="https://github.com/mazanlabeeb" target="blank"><FiGithub /></a>
                <a href="https://facebook.com/mazanlabeeb" target="blank"><FaFacebookF /></a>
                <a href="https://instagram.com/mazanlabeeb" target="blank"><FiInstagram /></a>
            </div>

            <div className="footer-copyright">
                <small className="text-gradient">&copy; MazanLabeeb.tech All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer;