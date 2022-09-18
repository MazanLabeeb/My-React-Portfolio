import CTA from "./CTA.component";
import "./header.styles.scss";

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h1>Mazan Labeeb</h1>
                <h5 className="text-light">Full Stack Developer</h5>
                <CTA />
            </div>
        </header>
    )
}

export default Header;