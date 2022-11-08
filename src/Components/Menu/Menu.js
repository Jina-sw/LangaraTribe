import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../Components/LoginContext";
import './Menu.css';

import { AiOutlineClose } from 'react-icons/ai';

const Menu = (props) => {

    const { isLoggedIn, setLoggedIn } = useContext(LoginContext);
    const menuRef = document.getElementById('menu');

    function exitButtonHandler() {
        props.setMenuOpen(!props.menuOpen);
        menuRef.style.transform = "translateX(0px)";
    };

    function logOut() {
        exitButtonHandler();
        setLoggedIn(!isLoggedIn);
        localStorage.setItem('login','false');
    };

    if(props.menuOpen){
        if(menuRef){
            menuRef.style.transform = "translateX(-1000px)";
        }
    }

    return (
        <div className="menuSlide" id="menu">
            <div className="menuGridBox">
                <div></div>
                <div>
                    <AiOutlineClose className="closeIcon" onClick={exitButtonHandler} />
                </div>
            </div>
            <div className="menuh1">Menu</div>
            <section className="menuList">
                <ul>
                    <li>
                        Profile
                        <div className="menuDiv"></div>
                    </li>
                    <li>
                        <Link to='/Course'>
                        Course
                        </Link>
                        <div className="menuDiv"></div>
                    </li>
                    <li>
                        Forum
                        <div className="menuDiv"></div>
                    </li>
                    <li>
                        Clubs
                        <div className="menuDiv"></div>
                    </li>
                    <li>
                        News
                        <div className="menuDiv"></div>
                    </li>
                </ul>
            </section>
            <p className="logoutButton" onClick={logOut}>Log Out</p>
        </div>
    );
};

export default Menu;