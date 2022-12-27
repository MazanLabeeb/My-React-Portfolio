import { AiOutlineHome } from "react-icons/ai"
import "./nav2.styles.scss";
import { Link } from "react-router-dom";

const HomeNav2 = () => <nav className="nav2">
    <ul>
        <li title="Home">
            <Link to={"/"} className="icon-wraper">
                <AiOutlineHome className="icon" />
            </Link>
            <span className="title">
                Home
            </span>
        </li>

    </ul>
</nav>


export default HomeNav2;