import "./services.styles.scss";
import { AiOutlineCheck } from 'react-icons/ai';
import { BiDotsHorizontal } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { viewPortOnce } from "../../config";

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services-container">
                <motion.article
                    initial={{
                        opacity: 0,
                        transform: 'translateY(100px)'
                    }}
                    whileInView={{
                        opacity: 1,
                        transform: 'translateY(0px)'

                    }}
                    viewport={{ once: viewPortOnce }}
                    transition={{ delay: 0.3 }}
                    className="service">
                    <div className="service-head">
                        <h3>Frontend Design</h3>
                    </div>

                    <ul className="service-list">
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Responsive Web Design using media queries.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Custom and unique website design according to Modren Trends.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Beautiful sliders and scrolling animations.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Convert Existing Site to Modern Design.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Single page website (SPA) using React.</p>
                        </li>
                    </ul>
                </motion.article>

                <motion.article
                    initial={{
                        opacity: 0,
                        transform: 'translateY(100px)'
                    }}
                    whileInView={{
                        opacity: 1,
                        transform: 'translateY(0px)'

                    }}
                    viewport={{ once: viewPortOnce }}
                    transition={{ delay: 0.7 }}
                    className="service">
                    <div className="service-head">
                        <h3>Web Developement</h3>
                    </div>

                    <ul className="service-list">
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Backend API development.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Clean and structured code to scale up for later.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Social media Integration, Contact Forms, Google Maps, Newsletter</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>3rd party API integration.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Secure Admin and User panel creation with desired functionalities.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>A Distinctive and Professional-Appearing Design</p>
                        </li>


                        <li>
                            <BiDotsHorizontal className="service-list-icon" />
                            <p>and much more</p>
                        </li>
                    </ul>
                </motion.article>

                <motion.article
                    initial={{
                        opacity: 0,
                        transform: 'translateY(100px)'
                    }}
                    whileInView={{
                        opacity: 1,
                        transform: 'translateY(0px)'
                    }}
                    viewport={{ once: viewPortOnce }}
                    transition={{ delay: 1.1 }}
                    className="service">
                    <div className="service-head">
                        <h3>Web Scraping and Automation</h3>
                    </div>

                    <ul className="service-list">
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Scraping script with GUI or non- GUI.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Deployment of the script in cloud platform.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Integrate the scraper with your database.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Automate form submission and/or Workflow.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Get your data in any format including CSV, JSON, Excel, and any Database.</p>
                        </li>
                    </ul>
                </motion.article>
            </div>
        </section>
    )
}

export default Services;