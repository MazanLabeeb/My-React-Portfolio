import "./PageNotFound.styles.scss";
import {TbFaceIdError} from "react-icons/tb";

const PageNotFound = () => {
    return (
        <div className="PageNotFound">
            
            <h1 className="error-heading text-gradient"><TbFaceIdError /> 404</h1>
        </div>
    );
}

export default PageNotFound;