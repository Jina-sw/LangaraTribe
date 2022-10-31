import React, { useContext } from 'react';
import { LoginContext } from '../App';
import './Nav.css';
import { IoPersonOutline, IoTrailSignOutline } from "react-icons/io5"
const Nav = () => {

    const isLoggedIn = useContext(LoginContext);

    const notLoggedIn = (
        <section className='signUpReq'>
            <span className='iconBox'>
                <IoPersonOutline />
                <p>Log In</p>
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
                <IoPersonOutline />
                <p>Logged In</p>
            </span>
            <span className='iconBox'>
                <IoTrailSignOutline />
                <p>Logged In</p>
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