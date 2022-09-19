import "./portfolio.styles.scss";
import PORTFOLIO1 from "../../assets/portfolio1.jpg";
import PORTFOLIO2 from "../../assets/portfolio2.jpg";
import PORTFOLIO3 from "../../assets/portfolio3.jpg";
import PORTFOLIO4 from "../../assets/portfolio4.jpg";
import PORTFOLIO5 from "../../assets/portfolio5.png";
import PORTFOLIO6 from "../../assets/portfolio6.jpg";


const data = [
    {
        id: 1,
        image: PORTFOLIO1,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: "https://www.github.com/mazanlabeeb",
        demo: "https://mazansblog.herokuapp.com"
    },
    {
        id: 2,
        image: PORTFOLIO2,
        title: "Charts templates & infogaphics in Figma",
        github: "https://www.github.com/mazanlabeeb",
        demo: "https://mazansblog.herokuapp.com"
    },
    {
        id: 3,
        image: PORTFOLIO3,
        title: "Figma dashboard UI Kit for data design web apps",
        github: "https://www.github.com/mazanlabeeb",
        demo: "https://mazansblog.herokuapp.com"
    },
    {
        id: 4,
        image: PORTFOLIO4,
        title: 'Charts templates & infogaphics in Figma',
        github: "https://www.github.com/mazanlabeeb",
        demo: "https://mazansblog.herokuapp.com"
    },
    {
        id: 5,
        image: PORTFOLIO5,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: "https://www.github.com/mazanlabeeb",
        demo: "https://mazansblog.herokuapp.com"
    },
    {
        id: 6,
        image: PORTFOLIO6,
        title: 'Charts templates & infogaphics in Figma',
        github: "https://www.github.com/mazanlabeeb",
        demo: "https://mazansblog.herokuapp.com"
    }
];


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio-container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article className="portfolio-item" key={id}>
                                <div className="portfolio-item-image">
                                    <img src={image} alt="Portfolio" />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio-item-cta">
                                    <a href={github} className="btn" target="_blank">Github</a>
                                    <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                                </div>
                            </article>
                        );
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;