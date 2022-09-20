import "./about.styles.scss";
import ABOUT_ME_IMG from "../../assets/1by1dp.png";
import {FaAward } from "react-icons/fa";
import {FiUsers } from "react-icons/fi";
import {AiOutlineFundProjectionScreen } from "react-icons/ai";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about-container">
                <div className="about-me">
                    <div className="about-me-image">
                        <img src={ABOUT_ME_IMG} alt="About Me" />
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article className="about-card">
                            <FaAward className="about-card-icon" />
                            <h5>Experience</h5>
                            <small>1+ year working</small>
                        </article>

                        <article className="about-card">
                            <FiUsers className="about-card-icon" />
                            <h5>Clients</h5>
                            <small>15+ Worldwide</small>
                        </article>

                        <article className="about-card">
                            <AiOutlineFundProjectionScreen className="about-card-icon" />
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>
                    </div>

                    <p>I have worked on various web technologies both frontend and backend. I have always been passionate about coding. I love to develope clean, efficient and scalable products.  </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;