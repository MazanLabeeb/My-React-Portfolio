import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs";

const HeaderSocials = () => {
    return (
        <div className="header-socials">
            <a href="https://www.linkedin.com/in/mazanlabeeb/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/mazanlabeeb" target="_blank"><BsGithub /></a>
            <a href="https://instagram.com/mazanlabeeb" target="_blank"><BsInstagram /></a>
            <a href="https://facebook.com/mazanlabeeb" target="_blank"><BsFacebook /></a>
            <a href="https://api.whatsapp.com/send?phone=923061695230" target="_blank"><BsWhatsapp /></a>
        </div>
    )
}

export default HeaderSocials;