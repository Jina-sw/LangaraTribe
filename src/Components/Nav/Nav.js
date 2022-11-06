import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../LoginContext';
import { IoPersonOutline, IoTrailSignOutline } from "react-icons/io5"
import { ImMenu } from "react-icons/im";
import './Nav.css';

const Nav = (props) => {

    const { isLoggedIn} = useContext(LoginContext);


    const notLoggedIn = (
        <section className='signUpReq'>
            <span className='iconBox'>
                <IoPersonOutline />
                <p><Link to="/login"> Log In </Link></p>
            </span>
            <span className='iconBox'>
                <IoTrailSignOutline />
                <p>Sign Up</p>
            </span>
        </section>
    );

    const loggedIn = (
        <section className='signUpReq'>
            <span className='iconBox'>
                <ImMenu />
                <p onClick={() => props.setMenuOpen(!props.menuOpen)}>Menu</p>
            </span>
        </section>
    );

    return (
        <div className="navContainer">
            <section className="logoContainer">
                <p>Tribe.</p>
                <p>Langara College.</p>
            </section>
            {isLoggedIn ? loggedIn : notLoggedIn}
        </div>
    );
};

export default Nav;