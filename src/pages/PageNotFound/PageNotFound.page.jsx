import "./PageNotFound.styles.scss";
import {TbFaceIdError} from "react-icons/tb";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="PageNotFound">
            <h1 className="error-heading text-gradient"><TbFaceIdError /> 404</h1>
            <p>The page you are looking for cannot be found!</p>
            <br />
            <Link to={"/"} className="btn btn-primary">Go Home</Link>
        </div>
    );
}

export default PageNotFound;