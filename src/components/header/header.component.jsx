import CTA from "./CTA.component";
import "./header.styles.scss";
import ME from "../../assets/me.png";
import HeaderSocials from "./header-socials.component";

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h1>Mazan Labeeb</h1>
                <h5 className="text-light">Full Stack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="Profile" />
                </div>
                
                <a href="#contact" className="scroll-down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;