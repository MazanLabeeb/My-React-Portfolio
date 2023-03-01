import CTA from "./CTA.component";
import "./header.styles.scss";
import ME from "../../assets/dp.png";
import HeaderSocials from "./header-socials.component";
import { motion } from 'framer-motion';
import { viewPortOnce } from "../../config";


const Header = () => {

    
    return (
        <header>
            <div className="container header-container">

                <motion.h5
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: viewPortOnce }}
                    transition={{ delay: 0.2 }}
                >
                    Hello I'm
                </motion.h5>
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: viewPortOnce }}
                    transition={{ delay: 0.7 }}

                    className="text-gradient"
                >&lt;Mazan Labeeb /&gt;</motion.h1>

                <motion.h5
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: viewPortOnce }}
                    transition={{ delay: 1.2 }}
                    className="text-light"
                >
                    Full Stack MERN Developer
                </motion.h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="Profile" />
                </div>

                <a href="#contact" className="scroll-down">Scroll Down</a>
            </div>
        </header >
    )
}

export default Header;