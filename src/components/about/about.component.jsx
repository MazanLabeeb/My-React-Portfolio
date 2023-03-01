import "./about.styles.scss";
import ABOUT_ME_IMG from "../../assets/1by1dp.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { motion } from 'framer-motion'
import { viewPortOnce } from "../../config";

const About = () => {

    return (
        <section id="about" >
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about-container">
                <div className="about-me">
                    <motion.div
                        initial={{ transform: 'rotate(0deg)' }}
                        whileInView={{ transform: 'rotate(10deg)' }}
                        transition={{ delay: 0.7 }}
                        className="about-me-image">
                        <img src={ABOUT_ME_IMG} alt="About Me" />
                    </motion.div>
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <motion.article
                            className="about-card"
                            initial={{
                                opacity: 0,
                                transform: 'translateX(50px)'
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: 'translateX(0px)'
                            }}
                            viewport={{ once: viewPortOnce }}
                            transition={{ delay: 0.3 }}
                        >

                            <FaAward className="about-card-icon" />
                            <h5>Experience</h5>
                            <small>1+ year working</small>
                        </motion.article>

                        <motion.article
                            className="about-card"
                            initial={{
                                opacity: 0,
                                transform: 'translateX(50px)'
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: 'translateX(0px)'
                            }}
                            viewport={{ once: viewPortOnce }}
                            transition={{ delay: 0.7 }}
                        >

                            <FiUsers className="about-card-icon" />
                            <h5>Clients</h5>
                            <small>15+ Worldwide</small>
                        </motion.article>

                        <motion.article
                            initial={{
                                opacity: 0,
                                transform: 'translateX(50px)'
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: 'translateX(0px)'
                            }}
                            viewport={{ once: viewPortOnce }}
                            transition={{ delay: 1.1 }}
                            className="about-card"
                        >

                            <AiOutlineFundProjectionScreen className="about-card-icon" />
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </motion.article>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: viewPortOnce }}
                        transition={{ delay: 1.4 }}
                    >
                        <p>
                            I have worked on various web technologies both frontend and backend. I have always been passionate about coding. I love to develope clean, efficient and scalable products.  </p>
                        <a href="#contact" className="btn btn-primary">Let's Talk</a>
                    </motion.div>


                </div>
            </div>
        </section>
    )
}

export default About;