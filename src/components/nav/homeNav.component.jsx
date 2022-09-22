import "./nav.styles.scss";
import {AiOutlineHome} from "react-icons/ai"
import { Link } from "react-router-dom";

const HomeNav = () => {
    return (
        <nav id="floatingNav">
            <Link to="/" className="" title="Home" ><AiOutlineHome /></Link>
        </nav>
    )
}

export default HomeNav;