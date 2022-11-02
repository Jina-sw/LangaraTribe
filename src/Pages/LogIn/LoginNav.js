import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";

function LoginNav() {
    return (
        <div className="loginNav">
            <Link to="/">
                <AiOutlineRollback className="loginNavBack" />
            </Link>
        </div>
    );
}

export default LoginNav;