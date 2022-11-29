import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../LoginContext';
import { MenuContext } from '../MenuContext';
import { IoPersonOutline, IoTrailSignOutline } from "react-icons/io5"
import { ImMenu } from "react-icons/im";
import './Nav.css';
import Menu from '../Menu/Menu';

const Nav = () => {

    const { isLoggedIn } = useContext(LoginContext);
    const { menuOpen, setMenu } = useContext(MenuContext);


    const notLoggedIn = (
        <section className='signUpReq'>
            <span className='iconBox'>
                <IoPersonOutline />
                <p><Link to="/login"> Log In </Link></p>
            </span>
            <span className='iconBox'>
                <IoTrailSignOutline />
                <p><Link to="/signup">Sign Up</Link></p>
            </span>
        </section>
    );

    const loggedIn = (
        <section className='signUpReq'>
            <span className='iconBox'>
                <ImMenu />
                <p onClick={() => setMenu(!menuOpen)}>Menu</p>
            </span>
        </section>
    );

    return (
        <div className="navContainer">
            <Link to='/'><section className="logoContainer">
                <p>Tribe.</p>
                <p>Langara College.</p>
            </section></Link>
            {isLoggedIn ? loggedIn : notLoggedIn}
            <Menu/>
        </div>
    );
};

export default Nav;