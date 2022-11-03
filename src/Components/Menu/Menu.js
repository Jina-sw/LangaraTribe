import { Link } from "react-router-dom";
import './Menu.css';

import { AiOutlineClose } from 'react-icons/ai';

const Menu = (props) => {

    return (
        <div className="menuSlide">
            <div className="menuGridBox">
                <div></div>
                <div>
                    <AiOutlineClose className="closeIcon" onClick={() => props.exitButtonHandler} />
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
                        Course
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
            <p className="logoutButton" onClick={() => props.logOut}>Log Out</p>
        </div>
    );
};

export default Menu;