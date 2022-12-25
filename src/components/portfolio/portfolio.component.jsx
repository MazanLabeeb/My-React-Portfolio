import "./portfolio.styles.scss";
import PORTFOLIO1 from "../../assets/portfolio1.jpg";
import PORTFOLIO2 from "../../assets/portfolio2.png";
import PORTFOLIO3 from "../../assets/portfolio3.png";
import { Link } from "react-router-dom";
import { GrProjects } from "react-icons/gr";



const data = [
    {
        id: 1,
        image: PORTFOLIO3,
        title: "Quick Round - Schedule your meetings.",
        github: "https://github.com/MazanLabeeb/quick-round",
        demo: "https://quickround.tech"
    },
    {
        id: 2,
        image: PORTFOLIO1,
        title: 'Wedding Plan Management System ',
        github: "https://github.com/MazanLabeeb/WPMS",
        demo: "https://weddingplanmanagementsystem.herokuapp.com/"
    },
    {
        id: 3,
        image: PORTFOLIO2,
        title: "Visa Site - World Wide Immigration",
        github: "https://github.com/MazanLabeeb/visa",
        demo: "https://visa-demo.herokuapp.com/"
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
                                <h3>{(title)}</h3>
                                <div className="portfolio-item-cta">
                                    <a href={github} className="btn" target="_blank">Github</a>
                                    <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                                </div>
                            </article>
                        );
                    })
                }
            </div>
            <div className="load-more">
                <Link className="btn btn-primary icon-btn" to={"/projects"}><GrProjects />More Projects</Link>
            </div>
        </section>
    )
}

export default Portfolio;




// {
//     id: 4,
//     image: PORTFOLIO4,
//     title: 'Charts templates & infogaphics in Figma',
//     github: "https://www.github.com/mazanlabeeb",
//     demo: "https://mazansblog.herokuapp.com"
// },
// {
//     id: 5,
//     image: PORTFOLIO5,
//     title: 'Crypto Currency Dashboard & Financial Visualization',
//     github: "https://www.github.com/mazanlabeeb",
//     demo: "https://mazansblog.herokuapp.com"
// },
// {
//     id: 6,
//     image: PORTFOLIO6,
//     title: 'Charts templates & infogaphics in Figma',
//     github: "https://www.github.com/mazanlabeeb",
//     demo: "https://mazansblog.herokuapp.com"
// }