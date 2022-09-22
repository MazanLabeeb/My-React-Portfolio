import "./nav.styles.scss";
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav id="floatingNav">
            <a href="#" className={(activeNav === "#")?"active": ""} onClick={()=>setActiveNav("#")} title="Home"><AiOutlineHome /></a>
            <a href="#about" className={(activeNav === "#about")?"active": ""} onClick={()=>setActiveNav("#about")} title="About"><AiOutlineUser /></a>
            <a href="#experience" className={(activeNav === "#experience")?"active": ""} onClick={()=>setActiveNav("#experience")} title="Experience"><BiBook /></a>
            <a href="#services" className={(activeNav === "#services")?"active": ""} onClick={()=>setActiveNav("#services")} title="Services"><RiServiceLine /></a>
            <a href="#contact" className={(activeNav === "#contact")?"active": ""} onClick={()=>setActiveNav("#contact")} title="Contact"><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav;