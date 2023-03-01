import { useEffect, useState } from "react";
import Spinner from "../../components/spinner/spinner.component";
import "./projects.styles.scss";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import moment from "moment";
import Footer from "../../components/footer/footer.component";
import HomeNav2 from "../../components/nav2/homeNav2.component";
import { motion } from "framer-motion";
import { viewPortOnce } from "../../config";


const Projects = () => {
    const [getRepos, setRepos] = useState(null);

    useEffect(
        () => {
            fetch("https://api.github.com/users/mazanlabeeb/repos")
                .then(response => {
                    if (response.status !== 200) setRepos("");
                    return response.json()
                })
                .then(result => {
                    setRepos(result);
                })
                .catch(_ => {
                    setRepos("");
                    console.log(getRepos);
                })
        },
        []
    )

    return (
        getRepos !== null ?
            (getRepos === "") ?
                <div className="centered-content">
                    <h1>Something went wrong</h1>
                    <Link to="/" >Go Home</Link>
                </div>
                :
                <>
                    <HomeNav2 />

                    <section className="projects">
                        <h1 className="icon-btn text-gradient"><BsGithub />  &nbsp; Github Projects</h1>
                        <div className="cards">
                            {getRepos.map((data, index) => {
                                const { name, description, html_url, homepage, created_at, id } = data;
                                return (
                                    <motion.div
                                        key={id}
                                        className="card"
                                        initial={{
                                            opacity: 0,
                                            transform: 'translateY(50px)'
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            transform: 'translateY(0px)'
                                        }}
                                        viewport={{ once: viewPortOnce }}
                                        transition={{ delay:  0.5 }}
                                    >
                                        <div>
                                            <h2>{name}</h2>
                                        </div>
                                        <div>
                                            Description: {(description) ? description : <i>Not Available</i>}
                                        </div>
                                        <div className="posted">
                                            <div className="cta">
                                                <a href={homepage} className={homepage ? "btn" : "btn btn-disabled"} target="blank">Demo</a>
                                                <a href={html_url} className="btn btn-primary" target="blank">Visit Repo</a>
                                            </div>
                                            <span>Posted: {moment(created_at).fromNow()}</span>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </section>
                    <Footer />
                </>

            :
            <div className="centered-content">
                <Spinner />
            </div>
    );
}

export default Projects