import "./footer.styles.scss";
import { useLocation } from "react-router-dom";
import { footerSocialTiles, viewPortOnce } from "../../config";
import { motion } from "framer-motion";

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
                {
                    footerSocialTiles.map((item, index) => {
                        const { id, link, icon } = item;
                        return <motion.a
                            initial={{
                                opacity: 0,
                                transform: 'translateX(50px)'
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: 'translateX(0px)'
                            }}
                            viewport={{ once: viewPortOnce }}
                            transition={{ delay: (index * 0.2) + (index / 5) }}
                            key={id}
                            href={link}
                            target="blank">
                            {icon}
                        </motion.a>
                    })
                }
            </div>

            <div className="footer-copyright">
                <small className="text-gradient">&copy; MazanLabeeb.tech All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer;