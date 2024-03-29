import About from "../../components/about/about.component";
import Contact from "../../components/contact/contact.component";
import Experience from "../../components/experience/experience.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import Nav from "../../components/nav/nav.component";
import Nav2 from "../../components/nav2/nav2.component";
import Portfolio from "../../components/portfolio/portfolio.component";
import Services from "../../components/services/services.component";
import Testimonials from "../../components/testimonials/testimonials.component";

const Index = () => {
    return (
        <>
            <Header />
            <Nav2 />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
           
            <Footer />
        </>
    );
}

export default Index;
