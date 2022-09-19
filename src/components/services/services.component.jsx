import "./services.styles.scss";
import {AiOutlineCheck} from 'react-icons/ai';

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services-container">
            <article className="service">
                    <div className="service-head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service-list">
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service-head">
                        <h3>Web Developement</h3>
                    </div>

                    <ul className="service-list">
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service-head">
                        <h3>Web Scraping and Automation</h3>
                    </div>

                    <ul className="service-list">
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className="service-list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services;