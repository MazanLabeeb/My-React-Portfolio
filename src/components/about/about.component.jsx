import "./about.styles.scss";
import ABOUT_ME_IMG from "../../assets/me-about.jpg";
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

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus excepturi inventore modi a cupiditate, animi quidem totam quis repellat corrupti repudiandae ipsum voluptatibus nobis ut similique consequatur beatae! Reprehenderit, beatae?</p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;