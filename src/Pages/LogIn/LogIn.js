import React, { useContext, useState } from "react";
import axios from "axios";
import { LoginContext } from "../../Components/LoginContext";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import LoginNav from "./LoginNav";
import "./Login.css";
import { Link } from "react-router-dom";

export default function LogIn() {
    const { isLoggedIn, setLoggedIn } = useContext(LoginContext);
    const [values, setValue] = useState({
        username: "",
        password: ""
    });
    const url = "localhost:3500/users/login";


    function loginHandler() {
        setLoggedIn(!isLoggedIn);
        localStorage.setItem('login', 'true');
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();

    };

    return (
        <div>
            <LoginNav />
            <form className="loginForm" onSubmit={formSubmitHandler}>
                <h1 className="loginHeader">
                    Login
                </h1>
                <section className="inputFields">
                    <p className="inputFieldHeader">
                        Username
                    </p>
                    <div className="inputPlaceHolder">
                        <AiOutlineUserAdd className="inputIcon" />
                        <input type="text" name="username" placeholder="Type your username" onChange={(e) => setValue({...values, username: e.target.value})} />
                    </div>
                </section>
                <section className="inputFields">
                    <p className="inputFieldHeader">
                        Password
                    </p>
                    <div className="inputPlaceHolder second">
                        <RiLockPasswordLine className="inputIcon" />
                        <input type="text" name="password" placeholder="Type your password" onChange={(e) => setValue({...values, password: e.target.value})}/>
                    </div>
                </section>
                <div className="findPassword">
                    <p>Forgot password?</p>
                </div>
                <section className="loginButton">
                    <button type="submit">LOGIN</button>
                </section>
                <section className="loginPageSignUp">
                    <p><Link to="/signup"> Or Sign Up!</Link></p>
                </section>
            </form>
        </div>
    );

}