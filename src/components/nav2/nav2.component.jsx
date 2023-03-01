import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./nav2.styles.scss";
import { useState } from "react";

const Nav2 = () => {
    const [activeNav, setActiveNav] = useState("#");


    return <nav className="nav2" id="floatingNav">
        <ul>
            <li className={(activeNav === "#") ? "active" : ""} title="Home">
                <a href="#" className="icon-wraper" onClick={() => setActiveNav("#")}>
                    <AiOutlineHome className="icon" />
                </a>
                <span className="title">
                    Home
                </span>
            </li>
            <li className={(activeNav === "#about") ? "active" : ""} title="About">
                <a href="#about" className="icon-wraper" onClick={() => setActiveNav("#about")}>
                    <AiOutlineUser className="icon" />
                </a>
                <span className="title">
                    About
                </span>
            </li>
            <li className={(activeNav === "#experience") ? "active" : ""} title="Skills">
                <a href="#experience" className="icon-wraper" onClick={() => setActiveNav("#experience")}>
                    <BiBook className="icon" />
                </a>
                <span className="title">Skills</span>
            </li>
            <li className={(activeNav === "#services") ? "active" : ""} title="Services">
                <a href="#services" className="icon-wraper" onClick={() => setActiveNav("#services")} >
                    <RiServiceLine className="icon" />
                </a>
                <span className="title">
                    Services
                </span>

            </li>
            <li className={(activeNav === "#contact") ? "active" : ""} title="Contact">
                <a href="#contact" className="icon-wraper" onClick={() => setActiveNav("#contact")} >
                    <BiMessageSquareDetail className="icon" />
                </a>
                <span className="title">Contact</span>
            </li>
            <div className="highlighter"></div>
        </ul>
    </nav>
}

export default Nav2;